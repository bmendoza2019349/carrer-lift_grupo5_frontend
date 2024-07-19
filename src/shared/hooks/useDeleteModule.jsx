import { useState } from 'react';
import { deleteModule as DeleteModule } from '../../services';

export const useDeleteModule = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [deletedModule, setDeletedModule] = useState(null);
  
    const deleteModuleById = async (courseId, moduleId) => {
      setLoading(true);
      try {
        const response = await DeleteModule(courseId, moduleId);
        if (response.error) {
          throw new Error(response.error.message || 'Failed to delete module');
        }
        setDeletedModule(response.deletedModule);
        setError(null);
      } catch (error) {
        setError(error.message || 'Failed to delete module');
      }
      setLoading(false);
    };
  
    return { loading, error, deletedModule, deleteModuleById };
};