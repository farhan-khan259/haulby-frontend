import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Quotes.css';
export default function Quotes(){ return <AdminPage config={adminConfigs['quotes']} />; }
