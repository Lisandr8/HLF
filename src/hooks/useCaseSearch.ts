import { useState, useCallback } from 'react';

export interface CaseStep {
  title: string;
  completed: boolean;
  date?: string;
}

export interface CaseData {
  id: string;
  title: string;
  client: string;
  status: 'en_proceso' | 'completado' | 'pendiente';
  lastUpdate: string;
  description: string;
  steps: CaseStep[];
}

// Helper to map API response to our internal CaseData interface
// Note: This is a placeholder mapping since we don't have the exact API response schema.
// In a real scenario, we would adjust this based on the actual JSON returned by the Poder Judicial API.
const mapApiResponseToCaseData = (apiData: any, query: string): CaseData => {
  // If the API returns a specific structure, we map it here.
  // For now, we'll try to extract meaningful fields or provide defaults.
  return {
    id: apiData.Nuc || apiData.NroSolicitud || query,
    title: apiData.Titulo || apiData.Asunto || 'Consulta de Trámite',
    client: apiData.Cliente || apiData.Partes || 'Información Protegida',
    status: apiData.Estado === 'Finalizado' ? 'completado' : 'en_proceso',
    lastUpdate: apiData.FechaActualizacion || new Date().toLocaleDateString(),
    description: apiData.Descripcion || 'Detalles del proceso judicial en curso.',
    steps: (apiData.Pasos || apiData.Historial || []).map((step: any) => ({
      title: step.Descripcion || step.Estado || 'Paso del proceso',
      completed: step.Completado || step.Estado === 'Finalizado',
      date: step.Fecha || step.FechaTramite
    })) || []
  };
};

export const useCaseSearch = () => {
  const [data, setData] = useState<CaseData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchByNuc = useCallback(async (nuc: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.poderjudicial.gob.do/Casos/Tramite/ObtenerDatosPorNuc?Nuc=${nuc}`
      );

      if (!response.ok) {
        throw new Error(`Error de servidor: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result || (Array.isArray(result) && result.length === 0)) {
        setError('No se encontraron resultados para el NUC proporcionado.');
        setData(null);
      } else {
        // Assuming the API returns the object directly or in an array
        const rawData = Array.isArray(result) ? result[0] : result;
        setData(mapApiResponseToCaseData(rawData, nuc));
      }
    } catch (err) {
      console.error('Error searching by NUC:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido al consultar por NUC');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchBySolicitud = useCallback(async (numeroSolicitud: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.poderjudicial.gob.do/Casos/Tramite/ObtenerDatosPorSolicitud?NroSolicitud=${numeroSolicitud}`
      );

      if (!response.ok) {
        throw new Error(`Error de servidor: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result || (Array.isArray(result) && result.length === 0)) {
        setError('No se encontraron resultados para el número de solicitud.');
        setData(null);
      } else {
        const rawData = Array.isArray(result) ? result[0] : result;
        setData(mapApiResponseToCaseData(rawData, numeroSolicitud));
      }
    } catch (err) {
      console.error('Error searching by Solicitud:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido al consultar por solicitud');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    searchByNuc,
    searchBySolicitud,
    clearSearch
  };
};
