import classes from './BottomSwitcher.module.css'
import InvestRegime from "./Regime/InvestRegime/InvestRegime";

const BottomSwitcher = (props)=>{
    return <div className={classes.wrapper}>
        <InvestRegime tabsInfo={props.tabsInfo} dispatch={props.dispatch}/>
    </div>
}

export default BottomSwitcher