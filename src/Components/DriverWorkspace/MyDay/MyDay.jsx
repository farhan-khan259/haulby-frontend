import DriverWorkspaceLayout from "../Common/DriverWorkspaceLayout";
import "./MyDay.css";
export default function MyDay({title="My Day",description="Driver mobile workspace for assigned collections and deliveries",active="Dashboard",section="DASHBOARD",contentTitle="At-a-glance overview",next="/driver/jobs/assigned",button="View assigned jobs"}){return <DriverWorkspaceLayout title={title} description={description} active={active} section={section} contentTitle={contentTitle} next={next} button={button}/>}
