import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import './styles/GlobalStyles.css'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
