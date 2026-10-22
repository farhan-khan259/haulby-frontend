import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Content.css';
export default function Content(){ return <AdminPage config={adminConfigs['content']} />; }
