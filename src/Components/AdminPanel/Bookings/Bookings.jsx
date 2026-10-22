import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './Bookings.css';
export default function Bookings(){ return <AdminPage config={adminConfigs['bookings']} />; }
