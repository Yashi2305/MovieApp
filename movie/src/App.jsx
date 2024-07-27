import './App.css';
import HomePages from "./home/HomePages";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SinglePage from './components/watch/SinglePage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path='/' element={<HomePages/>}/>
        <Route path='/singlepage/:id' element={<SinglePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
