import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './TelephonySettings.css';
export default function TelephonySettings(){ return <AdminPage config={adminConfigs['telephony-settings']} />; }
