import { NavLink } from "react-router-dom";
import logo from "/icons/logo.svg";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-color2 ">
      <div className="flex w-full max-w-[1200px] items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Injury Lawyers"
              title="Injury Lawyers"
              className="h-auto w-12"
            />
            <span className="text-2xl font-bold text-color1 ">
              Injury Lawyers
            </span>
          </NavLink>
        </div>
        <div className="flex gap-5">
          <NavLink to="/">
            {({ isActive }) => <NavItem text="Home" isActive={isActive} />}
          </NavLink>
          <NavLink to="/blogs">
            {({ isActive }) => <NavItem text="Blogs" isActive={isActive} />}
          </NavLink>
          <NavLink to="/about">
            {({ isActive }) => <NavItem text="About Us" isActive={isActive} />}
          </NavLink>
          <NavLink to="/service">
            {({ isActive }) => <NavItem text="Services" isActive={isActive} />}
          </NavLink>
          <NavLink to="/contact">
            {({ isActive }) => (
              <NavItem text="Contact Us" isActive={isActive} />
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
