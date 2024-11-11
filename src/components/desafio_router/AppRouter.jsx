import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "./componentes/produtos/Produto";
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import Contato from "./componentes/contato/Contato";
import './AppRouter.css'


const AppRouter = () => {
    return (<div className="app-router">

        <BrowserRouter>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Produto />} />
                    <Route path="/contato" element={<Contato />} />


                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
    );
};

export default AppRouter;