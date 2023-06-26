import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => (
  <>
    <nav>
      <NavBar />
    </nav>
    <main>
      <Outlet />
    </main>
  </>
)

export default Home;