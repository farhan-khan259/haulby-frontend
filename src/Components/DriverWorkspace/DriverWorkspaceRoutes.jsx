import { Navigate, Route, Routes } from "react-router-dom";
import MyDay from "./MyDay/MyDay";
import AssignedJob from "./AssignedJob/AssignedJob";
import CollectionChecklist from "./CollectionChecklist/CollectionChecklist";
import DeliveryConfirmation from "./DeliveryConfirmation/DeliveryConfirmation";
import DriverAvailability from "./DriverAvailability/DriverAvailability";
import DriverAccount from "./DriverAccount/DriverAccount";

export default function DriverWorkspaceRoutes() {
  return <Routes>
    <Route path="today" element={<MyDay />} />
    <Route path="jobs/:id/collection" element={<CollectionChecklist />} />
    <Route path="jobs/:id/delivery" element={<DeliveryConfirmation />} />
    <Route path="jobs/:id" element={<AssignedJob />} />
    <Route path="quotes" element={<MyDay title="Quotes" description="Review quotations connected to your assigned transport work." active="Quotes" section="QUOTES" contentTitle="Assigned job quotations" />} />
    <Route path="messages" element={<MyDay title="Messages" description="View communications for assigned collections and deliveries." active="Messages" section="MESSAGES" contentTitle="Job communications" />} />
    <Route path="availability" element={<DriverAvailability />} />
    <Route path="profile" element={<DriverAccount />} />
    <Route index element={<Navigate to="today" replace />} />
    <Route path="*" element={<Navigate to="today" replace />} />
  </Routes>;
}
