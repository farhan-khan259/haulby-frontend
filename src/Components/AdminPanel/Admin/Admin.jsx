import AdminPage from '../AdminPage/AdminPage';
import './Admin.css';
const audit = 'All sensitive updates: permission checks, reason codes, audit entry, confirmation, and reversible operations where appropriate.';
const page = {
  title:'Admin Overview', description:'Real-time operations, job coverage, verification workload, support and platform health.',
  stats:['Open transport requests','Jobs needing a match','Verification backlog','Active booking issues'], filters:['Job status','Service category','Region'],
  actions:['Review unfilled jobs','View verification queue','Open escalations','Download report'], primary:'Create alert',
  columns:['Request / case','Transport type','Age / priority','Next owner'], recordsTitle:'Coverage exceptions & urgent work',
  detail:'Coverage intervention', detailFields:['Job route','Matching radius','Last operator contact','Escalation owner'], detailText:'Selected record: none', detailAction:'Open intervention',
  inspectorNote:'Only authorised staff can manually intervene in matching.', required:'Wire live coverage KPIs; SLA ageing; unfilled request sorting; widen search; notify matching operators; assign owner; alert routing and action history.', requiredSecond:audit, specialties:[],
};
export default function Admin(){ return <AdminPage config={page}/>; }
