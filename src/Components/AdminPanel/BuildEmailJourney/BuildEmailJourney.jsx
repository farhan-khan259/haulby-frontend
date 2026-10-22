import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './BuildEmailJourney.css';
export default function BuildEmailJourney(){ return <AdminWorkflow config={workflowConfigs.buildEmailJourney}/>; }
