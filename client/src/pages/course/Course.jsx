import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from "../../hooks/useFetch.js";
import {
  useParams
} from "react-router-dom";
import InstructorCourses from '../../components/instructorCourses/InstructorCourses.jsx';


const Course = () => {

  let { id } = useParams();

  const { data, loading, error } = useFetch(
    `/course/${id}`
  );
  

  return (
    <div>
      <h2>{data.name}</h2>
      <h3>{data.category}</h3>
      <p>{data.price}</p>
      <img
                src={data.img}
                alt=""
                className="pListImg"
              />
      <h2>Instructor: {data.instructor}</h2>
      <InstructorCourses ids={data.instructor}/>
    </div>
  )
}

export default Course