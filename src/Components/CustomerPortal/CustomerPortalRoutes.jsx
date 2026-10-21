import { Navigate, Route, Routes } from "react-router-dom";
import CustomerDashboard from "./CustomerDashboard/CustomerDashboard";
import TransportRequests from "./TransportRequests/TransportRequests";
import RequestDetail from "./RequestDetail/RequestDetail";
import CompareQuotes from "./CompareQuotes/CompareQuotes";
import QuoteDetail from "./QuoteDetail/QuoteDetail";
import RequestMessages from "./RequestMessages/RequestMessages";
import MyBookings from "./MyBookings/MyBookings";
import BookingDetail from "./BookingDetail/BookingDetail";
import BookingUpdates from "./BookingUpdates/BookingUpdates";
import DeliveryEvidence from "./DeliveryEvidence/DeliveryEvidence";
import MyReviews from "./MyReviews/MyReviews";
import Notifications from "./Notifications/Notifications";
import SavedAddresses from "./SavedAddresses/SavedAddresses";
import SupportRequests from "./SupportRequests/SupportRequests";
import SupportCase from "./SupportCase/SupportCase";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import SecuritySettings from "./SecuritySettings/SecuritySettings";
import AlertPreferences from "./AlertPreferences/AlertPreferences";
import DataPrivacy from "./DataPrivacy/DataPrivacy";

export default function CustomerPortalRoutes(){
  return <Routes>
    <Route path="dashboard" element={<CustomerDashboard/>}/>
    <Route path="requests" element={<TransportRequests/>}/>
    <Route path="requests/:id" element={<RequestDetail/>}/>
    <Route path="requests/:id/quotes" element={<CompareQuotes/>}/>
    <Route path="requests/:id/quotes/:quoteId" element={<QuoteDetail/>}/>
    <Route path="requests/:id/messages" element={<RequestMessages/>}/>
    <Route path="bookings" element={<MyBookings/>}/>
    <Route path="bookings/:id" element={<BookingDetail/>}/>
    <Route path="bookings/:id/updates" element={<BookingUpdates/>}/>
    <Route path="bookings/:id/proof" element={<DeliveryEvidence/>}/>
    <Route path="reviews" element={<MyReviews/>}/>
    <Route path="notifications" element={<Notifications/>}/>
    <Route path="addresses" element={<SavedAddresses/>}/>
    <Route path="support" element={<SupportRequests/>}/>
    <Route path="support/:ticketId" element={<SupportCase/>}/>
    <Route path="settings/profile" element={<PersonalDetails/>}/>
    <Route path="settings/security" element={<SecuritySettings/>}/>
    <Route path="settings/notifications" element={<AlertPreferences/>}/>
    <Route path="settings/privacy" element={<DataPrivacy/>}/>
    <Route path="*" element={<Navigate replace to="dashboard"/>}/>
  </Routes>;
}
