import classes from './Header.module.css'
import BottomSwitcher from "./BottomSwitcher/BottomSwitcher";
import TopNav from "./TopNav/TopNav";

const Header = (props)=>{
    return <div className={classes.wrapper}>
        <BottomSwitcher tabsInfo={props.tabsInfo} dispatch={props.dispatch}/>
        <TopNav/>
    </div>
}

export default Header