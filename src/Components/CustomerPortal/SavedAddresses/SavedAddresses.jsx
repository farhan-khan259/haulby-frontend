import Layout from "../Common/CustomerPortalLayout"; import "./SavedAddresses.css";
export default function SavedAddresses(){return <Layout code="C13" pathLabel="/account/addresses" title="Saved Addresses" description="Frequent pickup and delivery addresses" cards={["Profile","Permissions","Preferences"]} type="settings" active="Account & Settings" nextPath="/account/support"/>}
