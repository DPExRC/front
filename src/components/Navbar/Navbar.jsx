import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {

    item1: "Productos",
    item2: "Pedidos",
    item3: "Proveedores",
    item4: "Item4",

    /*item n: "ITEM N ", */

  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsHovered(!isHovered || isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isHovered || isMenuOpen ? "bg-[#051D26]" : "bg-transparent"
      } drop-shadow-md`}
      style={{ height: '99.15px' }}
    >
      {/* Contenedor de Navbar */}
      <div
        className="w-full flex justify-center items-center py-2 px-8 md:px-32 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => !isMenuOpen && setIsHovered(false)}
        style={{ height: '100%' }}
      >
        {/* Logo a la izquierda */}
        <a href="/" className="absolute left-8" style={{ marginTop: '10px' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '100px', height: '100px' }}
            className="hover:scale-105 transition-all"
          />
        </a>

        {/* Menú principal centrado, visible solo en pantallas grandes */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base text-white">
          {Object.values(menuItems).map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                /*cambiar color del seleccionador de items --gray-- */
                className="p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de menú de hamburguesa, visible solo en pantallas pequeñas */}
        <i
          className={`xl:hidden block text-5xl cursor-pointer text-white ${
            isMenuOpen ? "bx bx-x" : "bx bx-menu"
          }`}
          style={{ position: 'absolute', right: '16px' }}
          onClick={handleMenuToggle}
        ></i>
      </div>

      {/* Menú desplegable para dispositivos pequeños */}
      {isMenuOpen && (
        <div className="absolute xl:hidden top-full left-0 w-full bg-[#051D26] flex flex-col items-center gap-6 font-semibold text-lg transition-all duration-300">
          <ul className="w-full flex flex-col items-center text-center">
            {Object.values(menuItems).map((item, index) => (
              <li key={index} className="mb-2 w-full">
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsHovered(false);
                  }}
                  className="block p-4 text-white hover:bg-gray-600 hover:text-white transition-all cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
