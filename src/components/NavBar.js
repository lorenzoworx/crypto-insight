import { NavLink } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

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
