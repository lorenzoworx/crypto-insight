import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './App.css';
import Home from './components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>} />
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
