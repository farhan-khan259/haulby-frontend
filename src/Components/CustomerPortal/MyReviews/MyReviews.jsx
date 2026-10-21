import Layout from "../Common/CustomerPortalLayout"; import "./MyReviews.css";
export default function MyReviews(){return <Layout code="C11" pathLabel="/account/reviews" title="My Reviews" description="Verified reviews and review management" cards={["Reference","Status","Updated"]} type="search" actionLabel="New / Manage" nextPath="/account/notifications"/>}
