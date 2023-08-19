import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Pedido from "./pages/Pedido";
import Reserva from "./pages/Reserva";
import About from "./pages/About";
import Legal from "./pages/Legal";
import ScrollToTop from "./components/ScrollToTop";
import MapaUbicacion from "./pages/MapaUbicacion";
import PaginaConstruccion from "./pages/PaginaConstruccion";
import { HashRouter, Route, Routes } from "react-router-dom";
import MenuEsperar from "./pages/MenuEsperar";
import PedidoYa from "./pages/PedidoYa";



function App() {

    return (
        <div className="d-flex flex-column min-vh-100">
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/menu" element={<MenuEsperar />} />
                    <Route exact path="/pedido" element={<PedidoYa />} />
                    <Route exact path="/reserva" element={<Reserva />} />
                    <Route exact path="/nosotros" element={<About />} />
                    <Route exact path="/legal" element={< Legal />} />
                    <Route exact path="/mapa" element={< MapaUbicacion />} />
                    <Route path="*" element={< PaginaConstruccion />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
