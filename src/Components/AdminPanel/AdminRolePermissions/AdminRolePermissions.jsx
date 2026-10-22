import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './AdminRolePermissions.css';
export default function AdminRolePermissions(){ return <AdminWorkflow config={workflowConfigs.rolePermissions}/>; }
