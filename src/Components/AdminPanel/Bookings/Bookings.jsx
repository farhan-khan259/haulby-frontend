import AdminPage from '../AdminPage/AdminPage';
import './Bookings.css';
const page = {
  title: 'Transport Bookings',
  description: 'Track agreed transport jobs from confirmed booking through delivery and resolution.',
  stats: ['Active bookings', 'Pickup exceptions', 'Deliveries due', 'Disputed bookings'],
  filters: ['Booking state', 'Collection date', 'Exception type'],
  actions: ['Open booking', 'Flag disruption', 'Contact both parties', 'Export manifest'],
  primary: 'Manage bookings',
  actionRoutes: {'Open booking': '/admin/bookings/demo', 'Manage bookings': '/admin/bookings/demo'},
  columns: ['Booking ID', 'Operator & customer', 'Journey stage', 'Next milestone'],
  recordsTitle: 'Bookings, milestones & operational exceptions',
  detail: 'Booking management',
  detailFields: ['Booked service', 'Pickup appointment', 'Proof-of-delivery', 'Issue history'],
  detailText: 'Selected record: none', detailAction: 'Resolve exception', detailTabs: true,
  inspectorNote: 'Collection and delivery state changes require evidence and customer messaging.',
  required: 'Confirm pickup/delivery timestamps and evidence; party messages; cancellation rules; exceptions; booking status amendments with explicit actor and reason.',
  requiredSecond: 'All sensitive updates: permission checks, reason codes, audit entry, confirmation, and reversible operations where appropriate.',
  specialties: [], realCaseLabel: 'real case', secureDataText: 'Secure data only', rowAction: 'Inspect',
};

export default function Bookings() { return <AdminPage config={page}/>; }
