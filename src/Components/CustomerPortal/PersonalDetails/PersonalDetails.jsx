import Layout from "../Common/CustomerPortalLayout"; import "./PersonalDetails.css";
export default function PersonalDetails(){return <Layout code="C16" pathLabel="/account/settings/profile" title="Personal Details" description="Account profile and contact details" cards={["Profile","Permissions","Preferences"]} type="settings" active="Account & Settings" nextPath="/account/settings/security"/>}
