import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import axios from "axios";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [listas, setListas] = useState("");

  const { data, loading, error } = useFetch(
    `/${path}`
  );

  useEffect(() => {
    setListas(data);
  }, [data]);

  console.log(path)

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setListas(listas.filter((item) => item._id !== id));
    } catch (err) {}
    // setListas(listas.filter((item) => item._id !== id));
  };

  // console.log(`it is list ${data}`)

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
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
        Add New {path}
        <Link to={`/admin/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={listas}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable;