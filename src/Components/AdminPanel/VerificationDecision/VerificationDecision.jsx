import AdminWorkflow from "../AdminWorkflow/AdminWorkflow";
import { workflowConfigs } from "../workflowConfigs";
import "./VerificationDecision.css";
export default function VerificationDecision() {
  return <AdminWorkflow config={workflowConfigs.verificationDecision} />;
}
