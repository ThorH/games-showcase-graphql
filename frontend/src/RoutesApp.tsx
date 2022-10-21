import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateSection from './components/CreateSection/CreateSection';
import ProductDetails from './components/ProductDetails/ProductDetails';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createsection" element={<CreateSection />} />
            <Route path="/productdetails/:productId" element={<ProductDetails />} />
        </Routes>
    )
}

export default RoutesApp;