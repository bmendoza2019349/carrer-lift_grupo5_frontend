import React from 'react';
import { getModules } from '../../shared/hooks/useGetModules';

export const ModulesList = () => {
    const { modules, loading, error } = getModules();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading modules.</div>;
    }

    return (
        <div>
            <h2>Modules</h2>
            <ul>
                {modules.map(module => (
                    <li key={module.id}>{module.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ModulesList;