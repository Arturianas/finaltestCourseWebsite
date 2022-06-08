import useFetch from "../../hooks/useFetch.js";
import './adminCategoriesControl.css'
import { Link } from "react-router-dom";

const AdminCategoriesControl = () => {

    const { data, loading, error } = useFetch(
        "/categories"
      );


  return (
    <div>
        {data.map(item => (
            <div className="admincategories">
                <h2>{item.category}</h2>
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        ))}
    </div>
  )
}

export default AdminCategoriesControl