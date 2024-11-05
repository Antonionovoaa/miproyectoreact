import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home.jsx';
import AboutPage from './components/About/About.jsx';
import ContactPage from './components/Contact/Contact.jsx';
import ProductsPage from './components/Product/Product.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import ProductsCategory from './components/Category/Category.jsx';
import 'tailwindcss/tailwind.css';





function App() {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path='/products' element={<ProductsPage/>} />
                    <Route path='/category/:categoryId' element={<ProductsCategory/>} />
                    <Route path='/productsgit/:productId' element={<ItemDetail />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>

    );
}

export default App;