import AdminPage from '../AdminPage/AdminPage';
import { adminConfigs } from '../adminConfigs';
import './AuditLogs.css';
export default function AuditLogs(){ return <AdminPage config={adminConfigs['audit-logs']} />; }
