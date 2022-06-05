import useFetch from "../../hooks/useFetch.js";
import './courseList.css'
import { Link } from "react-router-dom";

const CourseList = () => {

  const { data, loading, error } = useFetch(
    "/categories"
  );
  

  return (
    <div className="pList">
       {data.map((item) => ( 
        <div className="pListItem" key={item._id}>
           <Link to={"/courses/" + item.category} style={{ color: "inherit", textDecoration: "none" }}>
              <img
                src={item.img}
                alt=""
                className="pListImg"
              />
           </Link>
          <div className="pListTitles">
            <h1>{item.category}</h1>
            <h2>233 courses</h2>
          </div>
        </div>
    ))}
    </div>
  )
}

export default CourseList