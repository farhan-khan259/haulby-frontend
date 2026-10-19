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
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
