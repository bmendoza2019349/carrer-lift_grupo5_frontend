import { Route, Routes } from "react-router-dom";
import { AddCourses } from "../courses/AddCourses";
import { Courses } from "../courses/Courses";
import { AssingCourse } from "../courses/AssingCourse";
import { DeleteCourse } from "../courses/DeleteCourse";

export const Content = ({ courses, getCourses }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="addCourse" element={<AddCourses />} />
                <Route path="assign" element={<AssingCourse />} />
                <Route path="course" element={<Courses courses={courses} />} />
                <Route path="course/:id/coDelete" element={<DeleteCourse/>}/>
            </Routes>
        </div>
    )
}

