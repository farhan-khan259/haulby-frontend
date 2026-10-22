import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './PrepareRefund.css';
export default function PrepareRefund(){ return <AdminWorkflow config={workflowConfigs.prepareRefund}/>; }
