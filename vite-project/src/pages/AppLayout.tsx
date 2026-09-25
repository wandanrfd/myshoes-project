import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Sesuaikan path jika letaknya di folder components
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Outlet ini WAJIB ada agar Home, Products, dll. bisa muncul */}
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default AppLayout;
