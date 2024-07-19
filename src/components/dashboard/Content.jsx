import { Route, Routes } from "react-router-dom";
import { AddCourses } from "../courses/AddCourses";
import { Courses } from "../courses/Courses";

export const Content = ({courses, getCourses}) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="addCourse" element={<AddCourses />} />
                <Route path="course" element={<Courses courses={courses} />} />
            </Routes>
        </div>
    )
}

