import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './components/Home';
import CryptoCurrencyList from './components/CryptoCurrencyList';
import CryptoCurrencyDetails from './components/CryptoCurrencyDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<CryptoCurrencyList />} />
      <Route path="/currency/:id" element={<CryptoCurrencyDetails />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
