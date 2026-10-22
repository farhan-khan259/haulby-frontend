import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Categories.css';
export default function Categories(){ return <AdminPage config={adminConfigs['categories']} />; }
