import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Organisations.css';
export default function Organisations(){ return <AdminPage config={adminConfigs['organisations']} />; }
