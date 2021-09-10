import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Routes from './Routes';
import Navigation from './layout/Navigation/Navigation';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;
