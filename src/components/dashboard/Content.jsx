import { Route, Routes } from "react-router-dom";
import { AddCourses } from "../courses/AddCourses";
import { Courses } from "../courses/Courses";
import { CoursesView } from "../courses/CoursesView";
import { AssingCourse } from "../courses/AssingCourse";
import { DeleteCourse } from "../courses/DeleteCourse";
//import { PutCourse } from "../courses/PutCourse";
import { CreateModule } from "../Modules/CreateModule";
import { DeleteModule } from "../Modules/DeleteModule";

export const Content = ({ courses, getCourses }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="addCourse" element={<AddCourses />} />
                <Route path="module/:id" element={<CreateModule/>}/>
                <Route path="assign" element={<AssingCourse />} />
                <Route path="course" element={<Courses courses={courses} />} />
                <Route path="course/:id/coDelete" element={<DeleteCourse/>}/>
                <Route path="course/:id" element={<CoursesView getCourses={getCourses}/>}/>
                <Route path="modules/:id/:moduleId" element={<DeleteModule />} /> 
            </Routes>
        </div>
    )
}