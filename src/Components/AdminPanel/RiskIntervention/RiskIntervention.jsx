import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './RiskIntervention.css';
export default function RiskIntervention(){ return <AdminWorkflow config={workflowConfigs.riskIntervention}/>; }
