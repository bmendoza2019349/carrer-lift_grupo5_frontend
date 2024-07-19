import { useState } from 'react';
import { deleteModule as DeleteModule } from '../../services';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useDeleteModule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const deleteModule = async (id) => {
    setIsLoading(true);

    try {
      const response = await DeleteModule(id);

      setIsLoading(false)

      if (response.error) {
        console.error(response.error);
        return toast.error(response.e?.response?.data || 'Ocurrio un error al eliminar el modulo, intenta de nuevo');
      }

      navigate('/module')
      
    } catch (error) {
      setIsLoading(false);
      console.error('Delete module failed', error);
      toast.error('Ocurrió un error al eliminar el modulo, intenta de nuevo');
    }
  }

  return {
    deleteModule,
    isLoading
  }
};