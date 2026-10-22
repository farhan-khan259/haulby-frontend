import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Reports.css';
export default function Reports(){ return <AdminPage config={adminConfigs['reports']} />; }
