import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './ExpandJobMatching.css';
export default function ExpandJobMatching(){ return <AdminWorkflow config={workflowConfigs.expandMatching}/>; }
