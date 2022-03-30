import classes from './Tab.module.css'
import {NavLink} from "react-router-dom";


const Tab = (props)=>{

    return <div>
        <NavLink className={navData => navData.isActive ? classes.active : classes.item}
        to={`/investment/${props.URL}`}>
            <div className={classes.box}>
               <p> {props.value}</p>
            </div>
            <div></div>
        </NavLink>
    </div>
}

export default Tab