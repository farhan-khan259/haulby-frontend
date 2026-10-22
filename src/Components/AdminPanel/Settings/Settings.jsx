import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Settings.css';
export default function Settings(){ return <AdminPage config={adminConfigs['settings']} />; }
