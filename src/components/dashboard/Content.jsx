import { Route, Routes } from "react-router-dom";
import { AddCourses } from "../Course/AddCourses";
import { Courses } from "../Course/Courses";
import { CoursesView } from "../Course/CoursesView";
import { AssingCourse } from "../Course/AssingCourse";
import { DeleteCourse } from "../Course/DeleteCourse";
//import { PutCourse } from "../courses/PutCourse";
import { CreateModule } from "../Modules/CreateModule";
import { DeleteModule } from "../Modules/DeleteModule";
import Contact from "./Contact";

export const Content = ({ courses, getCourses }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="addCourse" element={<AddCourses />} />//
                <Route path="module/:id" element={<CreateModule />} />//
                <Route path="assign" element={<AssingCourse />} />
                <Route path="course" element={<Courses courses={courses} />} />//
                <Route path="course/:id/coDelete" element={<DeleteCourse />} />
                <Route path="course/:id" element={<CoursesView getCourses={getCourses} />} />
                <Route path="modules/:id/:moduleId" element={<DeleteModule />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    )
}