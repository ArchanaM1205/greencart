import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const SellerLayout = ({ children }) => {
  const { setIsSeller } = useAppContext();
  const navigate = useNavigate();

  const sidebarLinks = [
    { name: 'Add Product', path: '/seller', icon: assets.add_icon },
    { name: 'Product List', path: '/seller/product-list', icon: assets.product_list_icon },
    { name: 'Orders', path: '/seller/orders', icon: assets.order_icon },
  ];

  const logout = () => {
    setIsSeller(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-gray-200 bg-white shadow-sm">
        <div className="py-6 px-6 border-b border-gray-100">
          <NavLink to="/">
            <img src={assets.logo} alt="Logo" className="w-40" />
          </NavLink>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-lg transition text-sm font-medium
                ${isActive
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              <img src={link.icon} alt={`${link.name} icon`} className="w-5 h-5" />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="w-full px-4 md:px-8 py-4 border-b border-gray-200 bg-white flex justify-between items-center shadow-sm">
          <div></div> {/* Placeholder to keep spacing without logo */}
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Hi! Admin</p>
            <button
              onClick={logout}
              className="bg-primary text-white px-4 py-1 rounded-full text-sm hover:opacity-90 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
