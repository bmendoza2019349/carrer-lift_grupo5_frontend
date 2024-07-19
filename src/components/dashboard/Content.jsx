import { Route, Routes } from "react-router-dom";
import { AddCourses } from "../courses/AddCourses";
import { Courses } from "../courses/Courses";
import { CoursesView } from "../courses/CoursesView";

export const Content = ({courses, getCourses}) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="addCourse" element={<AddCourses />} />
                <Route path="course" element={<Courses courses={courses} />} />
                <Route path="course/:id" element={<CoursesView getCourses={getCourses}/>}/>
            </Routes>
        </div>
    )
}

