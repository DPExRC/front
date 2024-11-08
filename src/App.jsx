import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Productos, Pedidos, Proveedores, Producto4 } from "./pages";
import Footer from "../src/components/Footer/Footer"; // Asegúrate de que la ruta sea correcta
import Navbar from './components/Navbar/Navbar'; 


function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-[#051D26]"> 
                <Navbar /> 

                <main className="flex-grow"> {/* Este contenedor crecerá para ocupar el espacio disponible */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/pedidos" element={<Pedidos />} />
                        <Route path='/proveedores' element={<Proveedores/>}/>
                        <Route path='/producto4' element={<Producto4/>}/>

                    </Routes>
                </main>

                <Footer /> {/* Coloca el footer fuera de main para que siempre esté en la parte inferior */}
            </div>
        </Router>
    );
}

export default App;
