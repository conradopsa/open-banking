import Home from './pages/home/Home'
import QrChecked from './pages/qrChecked/QrChecked';
import Dispositivos from './pages/dispositivos/Dispositivos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QrCode from './pages/qdCode/QrCode';
import Load from './pages/load/Load';
import MeusDispositivos from './pages/meus-dispositivos/MeusDispositivos';
import DetalheDispositivo from './pages/detalhe-dispositivo/DetalheDispositivo';

function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/dispositivos">
                    <Dispositivos/>
                </Route>   

                <Route path="/checked">
                    <QrChecked />
                </Route>  

                <Route path="/qrcode">
                    <QrCode />
                </Route>    

                <Route path="/load">
                    <Load />
                </Route>   

                <Route path="/meus-dispositivos">
                    <MeusDispositivos />
                </Route>  
                
                <Route path="/detalhe-dispositivo">
                    <DetalheDispositivo />
                </Route>                 
            </Switch>
        </Router>
    );
}
export default Routers;