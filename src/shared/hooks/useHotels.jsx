import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { getHotels as getHotelsRequest } from "../../services/api";

export const useHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getHotels = useCallback(async () => {
        setIsFetching(true);
        const hotelsData = await getHotelsRequest();
        if (hotelsData.error) {
            toast.error(
                hotelsData.e?.response?.data || 'Ocurrió un error al leer los hoteles'
            );
            setIsFetching(false);
            return;
        }

        setHotels(hotelsData.data); // Asegúrate de que la data es directamente el array de hoteles
        setIsFetching(false);
    }, []);

    useEffect(() => {
        getHotels();
    }, [getHotels]);

    return {
        getHotels,
        isFetching,
        hotels,
    };
};
