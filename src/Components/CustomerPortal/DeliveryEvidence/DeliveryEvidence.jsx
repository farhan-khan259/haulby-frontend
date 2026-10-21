import Layout from "../Common/CustomerPortalLayout"; import "./DeliveryEvidence.css";
export default function DeliveryEvidence(){return <Layout code="C10" pathLabel="/account/bookings/[id]/proof" title="Delivery Evidence" description="Photos, signatures and completed evidence" cards={["Collection","Delivery","Proof"]} type="evidence" active="Requests & Jobs" nextPath="/account/reviews"/>}
