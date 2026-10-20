import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import FindTransport from './Components/FindTransport/FindTransport';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import VehicleTransport from './Components/VehicleTransport/VehicleTransport';
import CourierDeliveries from './Components/CourierDeliveries/CourierDeliveries';
import ParcelsPallets from './Components/ParcelsPallets/ParcelsPallets';
import FurnitureDelivery from './Components/FurnitureDelivery/FurnitureDelivery';
import HouseMoves from './Components/HouseMoves/HouseMoves';
import RoadFreight from './Components/RoadFreight/RoadFreight';
import PlantMachinery from './Components/PlantMachinery/PlantMachinery';
import CarTransport from './Components/CarTransport/CarTransport';
import MotorcycleTransport from './Components/MotorcycleTransport/MotorcycleTransport';
import VanTransport from './Components/VanTransport/VanTransport';
import VehicleRecovery from './Components/VehicleRecovery/VehicleRecovery';
import SameDayCourier from './Components/SameDayCourier/SameDayCourier';
import PalletDelivery from './Components/PalletDelivery/PalletDelivery';
import PartLoadsBackloads from './Components/PartLoadsBackloads/PartLoadsBackloads';
import OfficeRemovals from './Components/OfficeRemovals/OfficeRemovals';
import BoatTrailerTransport from './Components/BoatTrailerTransport/BoatTrailerTransport';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import CustomerHowItWorks from './Components/CustomerHowItWorks/CustomerHowItWorks';
import TransporterHowItWorks from './Components/TransporterHowItWorks/TransporterHowItWorks';
import ForBusinesses from './Components/ForBusinesses/ForBusinesses';
import CarDealers from './Components/CarDealers/CarDealers';
import RetailersOnlineSellers from './Components/RetailersOnlineSellers/RetailersOnlineSellers';
import BusinessFreightQuotes from './Components/BusinessFreightQuotes/BusinessFreightQuotes';
import FindTransportWork from './Components/FindTransportWork/FindTransportWork';
import TransporterMembership from './Components/TransporterMembership/TransporterMembership';
import OperatorRequirements from './Components/OperatorRequirements/OperatorRequirements';
import TrustSafety from './Components/TrustSafety/TrustSafety';
import AboutHaulby from './Components/AboutHaulby/AboutHaulby';
import ContactHaulby from './Components/ContactHaulby/ContactHaulby';
import HelpCentre from './Components/HelpCentre/HelpCentre';
import RequestTransportQuote from './Components/RequestTransportQuote/RequestTransportQuote';
import TransportAdvice from './Components/TransportAdvice/TransportAdvice';
import CarTransportGuide from './Components/CarTransportGuide/CarTransportGuide';
import UKTransportCoverage from './Components/UKTransportCoverage/UKTransportCoverage';
import AreaLandingPage from './Components/AreaLandingPage/AreaLandingPage';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import LegalPage from './Components/LegalPage/LegalPage';
import ChooseAccountType from './Components/Authentication/ChooseAccountType/ChooseAccountType';
import CustomerRegistration from './Components/Authentication/CustomerRegistration/CustomerRegistration';
import BusinessRegistration from './Components/Authentication/BusinessRegistration/BusinessRegistration';
import TransporterRegistration from './Components/Authentication/TransporterRegistration/TransporterRegistration';
import Login from './Components/Authentication/Login/Login';
import ForgotPassword from './Components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/Authentication/ResetPassword/ResetPassword';
import EmailVerification from './Components/Authentication/EmailVerification/EmailVerification';
import OrganisationInvitation from './Components/Authentication/OrganisationInvitation/OrganisationInvitation';
import MultiFactorAuthentication from './Components/Authentication/MultiFactorAuthentication/MultiFactorAuthentication';

function RouteScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RouteScrollHandler />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/find-transport" element={<FindTransport />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/vehicle-transport" element={<VehicleTransport />} />
        <Route path="/services/courier-deliveries" element={<CourierDeliveries />} />
        <Route path="/services/parcels-pallets" element={<ParcelsPallets />} />
        <Route path="/services/furniture-delivery" element={<FurnitureDelivery />} />
        <Route path="/services/house-moves" element={<HouseMoves />} />
        <Route path="/services/road-freight" element={<RoadFreight />} />
        <Route path="/services/plant-machinery" element={<PlantMachinery />} />
        <Route path="/services/car-transport" element={<CarTransport />} />
        <Route path="/services/motorcycle-transport" element={<MotorcycleTransport />} />
        <Route path="/services/van-transport" element={<VanTransport />} />
        <Route path="/services/vehicle-recovery" element={<VehicleRecovery />} />
        <Route path="/services/same-day-courier" element={<SameDayCourier />} />
        <Route path="/services/pallet-delivery" element={<PalletDelivery />} />
        <Route path="/services/part-loads-backloads" element={<PartLoadsBackloads />} />
        <Route path="/services/office-removals" element={<OfficeRemovals />} />
        <Route path="/services/boat-trailer-transport" element={<BoatTrailerTransport />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/how-it-works/customers" element={<CustomerHowItWorks />} />
        <Route path="/how-it-works/transporters" element={<TransporterHowItWorks />} />
        <Route path="/for-businesses" element={<ForBusinesses />} />
        <Route path="/for-businesses/car-dealers" element={<CarDealers />} />
        <Route path="/for-businesses/retailers" element={<RetailersOnlineSellers />} />
        <Route path="/business-freight-quotes" element={<BusinessFreightQuotes />} />
        <Route path="/find-transport-work" element={<FindTransportWork />} />
        <Route path="/transporter-membership" element={<TransporterMembership />} />
        <Route path="/operator-requirements" element={<OperatorRequirements />} />
        <Route path="/trust-safety" element={<TrustSafety />} />
        <Route path="/about" element={<AboutHaulby />} />
        <Route path="/contact" element={<ContactHaulby />} />
        <Route path="/help-centre" element={<HelpCentre />} />
        <Route path="/help-centre/request-a-transport-quote" element={<RequestTransportQuote />} />
        <Route path="/transport-advice" element={<TransportAdvice />} />
        <Route path="/transport-advice/car-transport-guide" element={<CarTransportGuide />} />
        <Route path="/uk-transport-coverage" element={<UKTransportCoverage />} />
        <Route path="/transport/:location" element={<AreaLandingPage />} />
        <Route path="/privacy-policy" element={<LegalPage document="privacy" />} />
        <Route path="/cookie-policy" element={<LegalPage document="cookies" />} />
        <Route path="/terms-of-use" element={<LegalPage document="terms" />} />
        <Route path="/transporter-agreement" element={<LegalPage document="transporter" />} />
        <Route path="/complaints-procedure" element={<LegalPage document="complaints" />} />
        <Route path="/accessibility" element={<LegalPage document="accessibility" />} />
        <Route path="/register" element={<ChooseAccountType />} />
        <Route path="/register/customer" element={<CustomerRegistration />} />
        <Route path="/register/business" element={<BusinessRegistration />} />
        <Route path="/register/transporter" element={<TransporterRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/invite/:token" element={<OrganisationInvitation />} />
        <Route path="/security/mfa" element={<MultiFactorAuthentication />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

