import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      {/* Home */}
      <Header/>
      <Home/> 
          <Footer/>
    </div>
  );
}

export default App;



