import React, { useState } from 'react';
import { useDeleteModule } from '../../shared/hooks/useDeleteModule';

export const DeleteModule = ({ courseId, moduleId }) => {
    const { loading, error, deletedModule, deleteModuleById } = useDeleteModule();

    const handleDelete = async () => {
        try {
            await deleteModuleById(courseId, moduleId);
        } catch (error) {
            console.error('Error deleting module:', error);
        }
    };

    return (
        <div>
            {loading && <p>Deleting module...</p>}
            {error && <p>Error: {error}</p>}
            {deletedModule && (
                <div>
                    <p>Module deleted successfully:</p>
                    <pre>{JSON.stringify(deletedModule, null, 2)}</pre>
                </div>
            )}
            <button onClick={handleDelete} disabled={loading}>
                Delete Module
            </button>
        </div>
    );
};