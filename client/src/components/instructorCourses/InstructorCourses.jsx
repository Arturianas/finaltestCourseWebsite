import React from 'react'
import { useSelector} from 'react-redux'
import useFetch from "../../hooks/useFetch.js";


const InstructorCourses = ({ids}) => {

    // const { user } = useSelector((state) => state.auth)

    const { data, loading, error } = useFetch(
        `/course/user/${ids}`
      );


  return (
    <>
        {data.map(item => (
            <h1 key={item._id}>{item.name}</h1>
        ))}
    </>
  )
}

export default InstructorCourses