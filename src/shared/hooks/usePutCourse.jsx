import { useState } from 'react';
import { updateCourse } from '../../services';

export const usePutCourse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const putCourse = async (id, data) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await updateCourse(id, data);
      setSuccess(true);
      setIsLoading(false);
      return response.data;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      return null;
    }
  };

  return { putCourse, isLoading, error, success };
};