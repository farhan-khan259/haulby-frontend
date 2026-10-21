import Layout from "../Common/CustomerPortalLayout";
import "./RequestDetail.css";
export default function RequestDetail() {
  return (
    <Layout
      code="C03"
      pathLabel="/account/requests/[id]"
      title="Request Detail"
      description="Job specification, photos, status and actions"
      active="Requests & Jobs"
      nextPath="/account/requests/demo/quotes"
    />
  );
}
