import { useState, useEffect } from 'react';
import { getModules as ModulesList } from '../../services';
import { toast } from 'react-hot-toast';

export const getModules = () => {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const response = await ModulesList();
                if (response.error) {
                    throw response.e;
                }
                setModules(response.data);
            } catch (e) {
                setError(e);
                toast.error('Error retrieving modules');
            } finally {
                setLoading(false);
            }
        };

        fetchModules();
    }, []);

    return { modules, loading, error };
};