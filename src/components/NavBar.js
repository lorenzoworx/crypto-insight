import { NavLink } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/fa";
import { BiMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/fa";

 const NavBar = () => (
    <>
      <NavLink to='/'>
        <IoChevronBackOutline />
      </NavLink>
      <span>Crypto Insight</span>
      <div>
        <BiMicrophone />
        <AiOutlineSearch />
      </div>
    </>
  );

export default NavBar;
