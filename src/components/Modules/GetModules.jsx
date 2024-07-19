import React from 'react';
import { getModules as useGetModules } from '../../shared/hooks/useGetModules';

export const ModulesList = () => {
    const { modules, loading, error } = useGetModules();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Modules List</h1>
            <ul>
                {modules.map((module) => (
                    <li key={module.id}>{module.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ModulesList;