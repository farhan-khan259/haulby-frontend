import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
