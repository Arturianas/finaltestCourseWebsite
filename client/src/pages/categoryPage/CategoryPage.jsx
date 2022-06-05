import React from 'react'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import {
    useParams
  } from "react-router-dom";
  import useFetch from "../../hooks/useFetch.js";

const CategoryPage = () => {

    let { category } = useParams();

    // const { data, loading, error } = useFetch(
    //     `/course/category/${category}`
    //   );

    console.log(category)

  return (
    <>
    <h2>This is {category} page</h2>
        {/* {data.map(item => (
            <h2>{item.category}</h2>
        ))} */}
        
        <FeaturedCourses cat={"category/"+category}/>
    </>
  )
}

export default CategoryPage