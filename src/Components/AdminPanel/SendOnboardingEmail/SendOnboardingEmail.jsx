import AdminWorkflow from '../AdminWorkflow/AdminWorkflow';
import { workflowConfigs } from '../workflowConfigs';
import './SendOnboardingEmail.css';
export default function SendOnboardingEmail(){ return <AdminWorkflow config={workflowConfigs.sendOnboardingEmail}/>; }
