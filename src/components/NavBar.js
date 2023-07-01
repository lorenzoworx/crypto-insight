import { NavLink } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const NavBar = () => (
  <>
    <NavLink to="/">
      <IoChevronBackOutline className="icon" />
    </NavLink>
    <span className="cryptoInsight">Crypto Insight</span>
    <div>
      <BiMicrophone className="icon" />
      <AiOutlineSearch className="icon" />
    </div>
  </>
);

export default NavBar;
