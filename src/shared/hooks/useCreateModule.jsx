import { useState } from 'react';
import { createModule as CreateModules } from '../../services';

export const useCreateModule = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const postModule = async (courseId, data) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    const response = await CreateModules(courseId, data);

    if (response.error) {
      setError(response.error);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  return { postModule, loading, success, error };
};