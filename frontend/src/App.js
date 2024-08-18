import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';


function App() {
  return (
   <div className='App'>
    <Header/>
    <Layout>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
    </Layout>
    <Footer/>
   </div>
  );
}

export default App;
