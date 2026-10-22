import AdminWorkflow from "../AdminWorkflow/AdminWorkflow";
import { workflowConfigs } from "../workflowConfigs";
import "./CompleteOperatorOnboarding.css";
export default function CompleteOperatorOnboarding() {
  return <AdminWorkflow config={workflowConfigs.completeOnboarding} />;
}
