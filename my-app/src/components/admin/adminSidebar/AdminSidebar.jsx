import './adminSidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
// import SchoolIcon from '@mui/icons-material/School';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { Logout} from '../../../features/auth/authService'
import { useNavigate } from 'react-router-dom'


const AdminSidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onLogout = () => {
      Logout(dispatch)
     
    //   dispatch(reset())
      navigate('/')
    }



  return (
    <div className='newSidebar'>

        <div className="role sidebar-top">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <span>UDEMY Admin</span>
            </Link>
        </div>
        <div className="sidebar-center">
            <ul className='list'>
                <Link to="/" style={{ textDecoration: "none", color: "#fff"}}>
                    <li className='list-item list-item-icon'>
                        <GridViewIcon className="icon" />
                        <span className='list-item-text'>Dasboard</span>
                    </li>
                </Link>
                <Link to="/admin/users" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='list-item list-item-icon'>
                        <GroupIcon className="icon"/>
                        <span className='list-item-text'>Users</span>
                    </li>
                </Link>
                <Link to="/admin/categories" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='list-item list-item-icon'>
                        <CategoryIcon className="icon"/>
                        <span className='list-item-text'>Categories</span>
                    </li>
                </Link>
                <li className='list-item list-item-icon'>
                    <BarChartIcon className='icon'/>
                    <span className='list-item-text'>Stats</span>
                    <LockIcon className='lock icon'/>
                </li>
                <li className='list-item list-item-icon'>
                    <SettingsIcon className='icon'/>
                    <span className='list-item-text'>Settings</span>
                    <LockIcon className='lock icon'/>
                </li>
            </ul>
        </div>
        <div className="sidebar-bottom">
            <button onClick={onLogout} className='logOutBtn'><LogoutIcon className='icon'/><span className='logout'>Logout</span></button>
        </div>
    </div>
  )
}

export default AdminSidebar