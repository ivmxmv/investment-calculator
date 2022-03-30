import classes from './TablePage.module.css'
import Table from "../../OutputComponents/Table/InvestTable";

const TablePage = (props)=>{
    return <div  className={`${classes.wrapper} investWrapper`}>
        <div className='investTableBox'>
            <Table state={props.state}/>
        </div>
    </div>
}

export default TablePage