import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Main/>
      </main>
    </div>
  );
}

export default App;
