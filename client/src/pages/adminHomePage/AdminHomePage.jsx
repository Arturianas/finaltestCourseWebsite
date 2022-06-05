import React from 'react'
import useFetch from "../../hooks/useFetch.js";

const AdminHomePage = () => {

  const { data, loading, error } = useFetch(
    "/users/all"
  );

  console.log(data)

  return (
    <div >
       {data.map((item) => ( 
        <div className="pListItem" key={item._id}>
           
          <div className="pListTitles">
            <h1>{item.username}</h1>
            Users
          </div>
        </div>
    ))}
    </div>
  )
}

export default AdminHomePage