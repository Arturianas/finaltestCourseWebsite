import "./instructorDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch.js";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { instructorCoursesColumns } from "../../../instructorDatatableSource";
// import { deleteCourse } from "../../features/course/courseSlice";
// import { getInstructorCourses, reset } from '../../features/course/courseSlice.js'
import { getInstructorCourses, deleteCourse } from "../../../features/instructorCourses/instructorCoursesService";

const InstructorDatatable = () => {

  // const courses = useSelector((state) => state.course.courses)
  // const {courses, isLoading, isError, message} = useSelector((state) => state.course)
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userId = user.details._id

  useEffect(() => {
    getInstructorCourses(userId, dispatch);
  }, [dispatch, userId]);

  const courses = useSelector((state) => state.instructorcourses.courses);

  const handleDelete = (id) => {
    deleteCourse(id, dispatch);
  };

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to={`/instructor/courses/${params.row._id}`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">Edit</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row._id)}
                  // onClick={()=> dispatch(deleteCourse(params.row._id))}
                  // onClick={() => console.log(params.row._id) }
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New 
        <Link to={`/instructor/course/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={courses}
        columns={instructorCoursesColumns.concat(actionColumn)}
        // columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default InstructorDatatable