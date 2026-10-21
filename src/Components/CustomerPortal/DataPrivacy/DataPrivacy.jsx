import Layout from "../Common/CustomerPortalLayout"; import "./DataPrivacy.css";
export default function DataPrivacy(){return <Layout code="C19" pathLabel="/account/settings/privacy" title="Data & Privacy" description="Export and personal-data rights requests" cards={["Profile","Permissions","Preferences"]} type="settings" active="Account & Settings" nextPath="/account/dashboard"/>}
