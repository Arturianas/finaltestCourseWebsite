export const instructorCoursesColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "img",
      headerName: "Image",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="Category cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {/* {params.row.category} */}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
        field: "price",
        headerName: "Price",
        width: 150,
      },
    // {
    //   field: "type",
    //   headerName: "Type",
    //   width: 100,
    // },
    // {
    //   field: "title",
    //   headerName: "Title",
    //   width: 230,
    // },
    // {
    //   field: "city",
    //   headerName: "City",
    //   width: 100,
    // },
  ];