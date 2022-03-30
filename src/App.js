import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Investment from "./components/Main/Investment/Investment";
import Trading from "./components/Main/Trading/Trading";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">

                <Header tabsInfo={props.state.investData.tabsInfo}
                        dispatch={props.dispatch}/>

                <Routes>
                    <Route path='/investment/*'
                           element={<Investment
                               state={props.state}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/trading/*'
                           element={<Trading/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
