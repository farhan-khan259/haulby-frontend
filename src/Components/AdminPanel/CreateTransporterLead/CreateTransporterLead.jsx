import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './CreateTransporterLead.css';
export default function CreateTransporterLead(){ return <AdminWorkflow config={workflowConfigs.createLead}/>; }
