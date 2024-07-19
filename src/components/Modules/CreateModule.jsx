import React, { useState } from 'react';
import { useCreateModule } from '../../shared/hooks/useCreateModule';
import { toast } from 'react-hot-toast';

export const CreateModule = ({ courseId }) => {
  const [nameModule, setNameModule] = useState('');
  const [descriptionModule, setDescriptionModule] = useState('');

  const { postModule, loading, success, error } = useCreateModule();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const moduleData = {
      nameModule,
      descriptionModule,
    };

    await postModule(courseId, moduleData);

    if (success) {
      toast.success('Module added successfully!');
      setNameModule('');
      setDescriptionModule('');
    }

    if (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameModule">Module Name:</label>
        <input
          type="text"
          id="nameModule"
          value={nameModule}
          onChange={(e) => setNameModule(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="descriptionModule">Description:</label>
        <textarea
          id="descriptionModule"
          value={descriptionModule}
          onChange={(e) => setDescriptionModule(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Adding Module...' : 'Add Module'}
      </button>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </form>
  );
};