import './adminCategoriesPage.scss'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import Datatable from '../../components/datatable/Datatable'

const AdminCategoriesPgae = ({columns}) => {
  return (
    <div className="home">
    <AdminSidebar/>
    <div className="homeContaineris">
      <AdminNavbar/>
      <h2>Create Or Delete Categories</h2>
      <Datatable columns={columns}/>
      
    </div>

  </div>
  )
}

export default AdminCategoriesPgae