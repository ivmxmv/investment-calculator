import classes from './InvestRegime.module.css'
import Tab from './Tab/Tab'
import {Route} from "react-router-dom";

const InvestRegime = (props) => {


    let tabsComponent = props.tabsInfo
        .map(t => <Tab URL={t.URL} value={t.value} dispatch={props.dispatch}/>)

    return <div className={classes.wrapper}>
        {tabsComponent}
    </div>
}

export default InvestRegime