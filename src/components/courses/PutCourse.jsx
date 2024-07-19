import React, { useState } from 'react';
import { usePutCourse } from '../../shared/hooks/usePutCourse';
import { toast } from 'react-hot-toast';

export const UpdateCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
  });

  const { putCourse, isLoading, error, success } = usePutCourse();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await putCourse(courseId, courseData);
    if (response) {
      toast.success('Course updated successfully!');
    } else {
      toast.error('Failed to update course.');
    }
  };

  return (
    <div>
      <h2>Update Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseId">Course ID:</label>
          <input
            type="text"
            id="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Course'}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
      {success && <p>Course updated successfully!</p>}
    </div>
  );
};