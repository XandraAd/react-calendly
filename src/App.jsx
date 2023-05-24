import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import './homepage.css';
import Routing from './components/Routing';


function App() {
 

  return (
    <>
     <div>
      <Navbars/>
      <Routing/>
      <hr />
      <Footer/>
     </div>
    </>
  )
}

export default App
