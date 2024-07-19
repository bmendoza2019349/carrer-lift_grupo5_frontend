import { useState } from 'react';
import { updateModule as PutModule  } from '../../services';

export const usePutModule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const updateModule = async (id, moduleId, moduleData) => {
    setIsLoading(true);
    try {
      const response = await PutModule(id, moduleId, moduleData);
      if (response.error) {
        throw new Error(response.error.message || 'Error updating module');
      }
      setSuccessMessage(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Error updating module');
      setSuccessMessage(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, successMessage, updateModule };
};