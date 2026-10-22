import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './DisputeResolution.css';
export default function DisputeResolution(){ return <AdminWorkflow config={workflowConfigs.disputeResolution}/>; }
