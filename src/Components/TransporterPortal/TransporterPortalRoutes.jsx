import { Navigate, Route, Routes } from "react-router-dom";
import OnboardingWelcome from "./OnboardingWelcome/OnboardingWelcome";
import OperatorBusinessDetails from "./OperatorBusinessDetails/OperatorBusinessDetails";
import TransportServices from "./TransportServices/TransportServices";
import VehiclesCapacity from "./VehiclesCapacity/VehiclesCapacity";
import OnboardingCoverage from "./OnboardingCoverage/OnboardingCoverage";
import LicenceInsuranceEvidence from "./LicenceInsuranceEvidence/LicenceInsuranceEvidence";
import ReviewRegistration from "./ReviewRegistration/ReviewRegistration";
import VerificationStatus from "./VerificationStatus/VerificationStatus";
import TransporterDashboard from "./TransporterDashboard/TransporterDashboard";
import FindAvailableWork from "./FindAvailableWork/FindAvailableWork";
import AvailableJobDetail from "./AvailableJobDetail/AvailableJobDetail";
import MyQuotes from "./MyQuotes/MyQuotes";
import QuoteDetail from "./QuoteDetail/QuoteDetail";
import TransportJobs from "./TransportJobs/TransportJobs";
import TransportJobDetail from "./TransportJobDetail/TransportJobDetail";
import UploadProof from "./UploadProof/UploadProof";
import TransporterMessages from "./TransporterMessages/TransporterMessages";
import MyVehicles from "./MyVehicles/MyVehicles";
import VehicleDetail from "./VehicleDetail/VehicleDetail";
import JobAlerts from "./JobAlerts/JobAlerts";
import MyReviews from "./MyReviews/MyReviews";
import FreeOperatorAccess from "./FreeOperatorAccess/FreeOperatorAccess";
import CustomerBookingFeeStatus from "./CustomerBookingFeeStatus/CustomerBookingFeeStatus";
import Notifications from "./Notifications/Notifications";
import TransporterSupport from "./TransporterSupport/TransporterSupport";
import OperatorSettings from "./OperatorSettings/OperatorSettings";
import DispatchTeamDrivers from "./DispatchTeamDrivers/DispatchTeamDrivers";
import DispatchCalendar from "./DispatchCalendar/DispatchCalendar";
import RouteBackloadMatching from "./RouteBackloadMatching/RouteBackloadMatching";
import OperatorAnalytics from "./OperatorAnalytics/OperatorAnalytics";
import CustomerInvoices from "./CustomerInvoices/CustomerInvoices";
import CreateCustomerInvoice from "./CreateCustomerInvoice/CreateCustomerInvoice";
import CustomerInvoiceDetail from "./CustomerInvoiceDetail/CustomerInvoiceDetail";
import TransportCoverage from "./TransportCoverage/TransportCoverage";
export default function TransporterPortalRoutes() {
  return (
    <Routes>
      <Route path="onboarding" element={<OnboardingWelcome />} />
      <Route path="onboarding/business" element={<OperatorBusinessDetails />} />
      <Route path="onboarding/services" element={<TransportServices />} />
      <Route path="onboarding/vehicles" element={<VehiclesCapacity />} />
      <Route path="onboarding/coverage" element={<OnboardingCoverage />} />
      <Route
        path="onboarding/documents"
        element={<LicenceInsuranceEvidence />}
      />
      <Route path="onboarding/review" element={<ReviewRegistration />} />
      <Route path="onboarding/status" element={<VerificationStatus />} />
      <Route path="dashboard" element={<TransporterDashboard />} />
      <Route path="find-work" element={<FindAvailableWork />} />
      <Route path="find-work/:requestId" element={<AvailableJobDetail />} />
      <Route path="quotes" element={<MyQuotes />} />
      <Route path="quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="bookings" element={<TransportJobs />} />
      <Route path="bookings/:id" element={<TransportJobDetail />} />
      <Route path="bookings/:id/proof" element={<UploadProof />} />
      <Route path="messages" element={<TransporterMessages />} />
      <Route path="vehicles" element={<MyVehicles />} />
      <Route path="vehicles/:id" element={<VehicleDetail />} />
      <Route path="alerts" element={<JobAlerts />} />
      <Route path="reviews" element={<MyReviews />} />
      <Route path="access" element={<FreeOperatorAccess />} />
      <Route path="fee-status" element={<CustomerBookingFeeStatus />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="support" element={<TransporterSupport />} />
      <Route path="settings" element={<OperatorSettings />} />
      <Route path="team" element={<DispatchTeamDrivers />} />
      <Route path="calendar" element={<DispatchCalendar />} />
      <Route path="backloads" element={<RouteBackloadMatching />} />
      <Route path="analytics" element={<OperatorAnalytics />} />
      <Route path="invoices" element={<CustomerInvoices />} />
      <Route path="invoices/new" element={<CreateCustomerInvoice />} />
      <Route path="invoices/:invoiceId" element={<CustomerInvoiceDetail />} />
      <Route path="coverage" element={<TransportCoverage />} />
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
}
