import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Requests.css';
export default function Requests(){ return <AdminPage config={adminConfigs['requests']} />; }
