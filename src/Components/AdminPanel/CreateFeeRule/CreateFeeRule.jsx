import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './CreateFeeRule.css';
export default function CreateFeeRule(){ return <AdminWorkflow config={workflowConfigs.createFeeRule}/>; }
