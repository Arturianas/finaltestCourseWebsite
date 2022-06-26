import React from 'react'
import "./myCourseList.scss"
import { Link } from "react-router-dom";

const MyCourseList = ({course}) => {
  return (
            <li key={course._id} className="myCourseListItem">
                <div className="myCoursesImg">
                    <Link to={"/myCourses/" + course._id} style={{ color: "inherit", textDecoration: "none" }}>
                        <img
                            src={course.img}
                            alt=""
                            className="myCoursesListImg"
                        />
                    </Link>
                </div>
                <div className="myCoursesInfo">
                    <h2>{course.name}</h2>
                    <h3>{course.title}</h3>
                </div>
                
                
               
            </li>
  )
}

export default MyCourseList