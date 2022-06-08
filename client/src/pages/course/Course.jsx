import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom'
import useFetch from "../../hooks/useFetch.js";
import {
  useParams
} from "react-router-dom";
import InstructorCourses from '../../components/instructorCourses/InstructorCourses.jsx';
import { useDispatch } from 'react-redux';
import { addProduct } from "../../features/cart/cartSlice";


const Course = () => {

  let { id } = useParams();

  const { data, loading, error } = useFetch(
    `/course/${id}`
  );
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({ ...data })
    );
  };

  return (
    <div className='Wrapper'>
            <div className='ImageContainer'>
                <img src={data.img}/>
            </div>

            <div className='InfoContainer'>
                <div className='Title'>
                    {data.title}
                </div>
                <div className='ProductDescription'>
                    {data.desc}
                </div>
                <div className='Price'>$ {data.price}</div>



                <div className='FilterContainer'>
                <div className='Filter'>
              
            </div>

                    <div className='Filter'>
                        <h2>filter</h2>
                        
                    </div>
                </div>


                <div className='AddContainer'>
                    
                    <button className='Button' onClick={handleClick}>ADD TO CART</button>
                </div>

            </div>
        </div>
  )
}

export default Course