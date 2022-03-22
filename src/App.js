import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Profile from './components/Profile/Profile';
import Nav from './components/nav/Nav';
import MobileNav from './components/nav/MobileNav';

function App() {
  return (
    <>
        <Nav/>
        <MobileNav/>
    <div className= "container">
    <Header/>
    <About/>
    <Profile/>
    </div>
    </>
  );
}

export default App;
