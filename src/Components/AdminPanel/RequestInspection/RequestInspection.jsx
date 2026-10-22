import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './RequestInspection.css';
export default function RequestInspection(){ return <AdminPage config={adminConfigs['request-inspection']} />; }
