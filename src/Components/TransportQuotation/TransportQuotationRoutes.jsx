import { Navigate, useLocation } from "react-router-dom";
import ChooseTransportType from "./ChooseTransportType/ChooseTransportType";
import CollectionDestination from "./CollectionDestination/CollectionDestination";
import ItemsVehicleDetails from "./ItemsVehicleDetails/ItemsVehicleDetails";
import AccessHandling from "./AccessHandling/AccessHandling";
import DatesAvailability from "./DatesAvailability/DatesAvailability";
import PhotosDocuments from "./PhotosDocuments/PhotosDocuments";
import ReviewPublish from "./ReviewPublish/ReviewPublish";

const pages = {
  category: ChooseTransportType,
  journey: CollectionDestination,
  items: ItemsVehicleDetails,
  access: AccessHandling,
  timing: DatesAvailability,
  photos: PhotosDocuments,
  review: ReviewPublish,
};

export default function TransportQuotationRoutes() {
  const { search } = useLocation();
  const step = new URLSearchParams(search).get("step") || "category";
  const Page = pages[step];
  return Page ? <Page /> : <Navigate replace to="/quote/new?step=category" />;
}
