import { useState } from "react";
import { useUploadVideos } from "../../shared/hooks/useUploadVideos";


export const uploadVideos = () => {
    const { isLoading, uploadVideos } = useUploadVideos();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };

    const handleUpload = () => {
        const courseId = 'courseIdExample'; // Replace with actual course ID
        const moduleId = 'moduleIdExample'; // Replace with actual module ID
        uploadVideos(courseId, moduleId, selectedFiles);
    };

    return (
        <div>
            <input type="file" multiple accept="video/mp4" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={isLoading}>
                {isLoading ? 'Uploading...' : 'Upload Videos'}
            </button>
        </div>
    )
}
