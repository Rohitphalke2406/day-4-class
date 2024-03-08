import Navbar from './Navbar';
import Quote from './QuoteSection';
import Footer from './Footer';
// import Home from './home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App;
