import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createModule as CreateModulesRequest } from '../../services';

export const useCreateModule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const postModule = async (id, nameModule, descriptionModule) => {
    setIsLoading(true);
    try {
      const response = await CreateModulesRequest(
        { id }, { nameModule ,  descriptionModule }
      );
      console.log('Response:', response);

      navigate('/course')
      if (response.error) {
        console.log(response.error)
        return toast.error(response.e?.response?.data || 'Ocurrió un error al modular, intenta de nuevo')

      }
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false);
      console.error('Add module failed', error);
      toast.error('Ocurrió un error al agregar modulo, intenta de nuevo');
    }
  };

  return { 
    postModule, 
    isLoading
  };
};