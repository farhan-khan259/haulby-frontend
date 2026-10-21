import L from "../Common/BusinessPortalLayout";
import "./BusinessBookingDetail.css";
export default function BusinessBookingDetail() {
  return (
    <L
      title="Business Booking Detail"
      description="Reuses common booking record"
      active="Bookings"
      next="/business/locations"
      extras="booking-detail"
    />
  );
}
