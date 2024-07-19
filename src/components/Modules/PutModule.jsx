import React, { useState } from 'react';
import { usePutModule } from '../../shared/hooks/usePutModule';

export const UpdateModule = ({ courseId, moduleId }) => {
  const [moduleData, setModuleData] = useState({
    title: '',
    description: ''
  });

  const { isLoading, error, successMessage, updateModule } = usePutModule();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModuleData({ ...moduleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = moduleData;

    await updateModule(courseId, moduleId, { title, description });
  };

  return (
    <div>
      <h2>Update Module</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={moduleData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={moduleData.description} onChange={handleInputChange} />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Module'}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {successMessage && <p>Success: {successMessage}</p>}
    </div>
  );
};