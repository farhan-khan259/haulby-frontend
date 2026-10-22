import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Admin.css';
export default function Admin(){ return <AdminPage config={adminConfigs['admin']} />; }
