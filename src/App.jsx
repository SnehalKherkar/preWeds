
import "./App.css";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import RemainingP from "./HeaderFirst/RemainingP";
import Footer from "./footer/Footer";
import Packages from "./packages/Packages";
import FullDay from "./payment/FullDay";
import MiniPackage from "./payment/MiniPackage";
import Header from "./HeaderFirst/Header";
import Privacy from "./privacy/Privacy";
import Cancelation from "./privacy/Cancelation";
import Refund from "./privacy/Refund";
import LoginePage from "./loginePage/LoginePage";


function App() {


  return (
    <div className="root">
      {/* <LoginePage/> */}
  
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<RemainingP/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/fullDay" element={<FullDay/>} />
        <Route path="/halfDay" element={<MiniPackage/>} />
        <Route path="/privacy" element={<Privacy/>}  />
        <Route path="/cancelation" element={<Cancelation/>}  />
        <Route path="/refund" element={<Refund/>} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
