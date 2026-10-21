import Layout from "../Common/CustomerPortalLayout";
import "./AlertPreferences.css";
export default function AlertPreferences() {
  return (
    <Layout
      code="C18"
      pathLabel="/account/settings/notifications"
      title="Alert Preferences"
      description="Email and optional SMS alert controls"
      cards={["Profile", "Permissions", "Preferences"]}
      type="settings"
      active="Account & Settings"
      nextPath="/account/settings/privacy"
    />
  );
}
