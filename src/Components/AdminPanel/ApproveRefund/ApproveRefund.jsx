import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './ApproveRefund.css';
export default function ApproveRefund(){ return <AdminWorkflow config={workflowConfigs.approveRefund}/>; }
