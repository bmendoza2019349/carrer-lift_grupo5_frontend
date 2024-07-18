import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadVideo as uploadVideoRequest } from "../../services";

import React from 'react'

export const useUploadVideos = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const uploadVideos = async (courseId, moduleId, files) => {
        setIsLoading(true);
        const formData = new FormData();
        files.forEach(file => {
            formData.append('videos', file);
        });

        try {
            const response = await uploadVideoRequest(courseId, moduleId, formData);

            if (response.status === 200) {
                toast.success('Videos uploaded successfully!');
                navigate('/principal')
            } else {
                toast.error('Failed to upload videos');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while uploading videos');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        uploadVideos,
    };
};
