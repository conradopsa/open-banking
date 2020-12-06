import Home from './pages/home/Home'
import QrChecked from './pages/qrChecked/QrChecked';
import Dispositivos from './pages/dispositivos/Dispositivos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            </Switch>
        </Router>
    );
}
export default Routers;