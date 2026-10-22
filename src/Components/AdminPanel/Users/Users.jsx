import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Users.css';
export default function Users(){ return <AdminPage config={adminConfigs['users']} />; }
