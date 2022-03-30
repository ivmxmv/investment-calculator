import classes from './Investment.module.css'
import {Route, Routes, Switch} from "react-router-dom";
import EndAmount from "./Pages/EndAmount/EndAmount";
import AdditionalContribution from "./Pages/AdditionalContribution/AdditionalContribution";
import ReturnRate from "./Pages/ReturnRate/ReturnRate";
import StartingAmount from "./Pages/StartingAmount/StartingAmount";
import InvestmentLength from "./Pages/InvestmentLength/InvestmentLength";
import TablePage from "./Pages/Table/TablePage";

const Investment = (props) => {
    return <div className={classes.investControlPage}>
        <Routes>
            <Route path={props.state.investData.tabsInfo[0].URL}
                   element={<EndAmount
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path={props.state.investData.tabsInfo[1].URL}
                   element={<AdditionalContribution
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path={props.state.investData.tabsInfo[2].URL}
                   element={<ReturnRate
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path={props.state.investData.tabsInfo[3].URL}
                   element={<StartingAmount
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path={props.state.investData.tabsInfo[4].URL}
                   element={<InvestmentLength
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path={props.state.investData.tabsInfo[5].URL}
                   element={<TablePage
                       state={props.state}/>}/>
        </Routes>
    </div>
}

export default Investment