import classes from './InvestmentLength.module.css'
import AdditionalContribution from "../../InputComponents/AdditionalContribution/AdditionalContribution";
import ReturnRate from "../../InputComponents/ReturnRate/ReturnRate";
import StartingAmount from "../../InputComponents/StartingAmount/StartingAmount";
import EndAmount from "../../InputComponents/EndAmount/EndAmount";
import OutputTextbox from "../../OutputComponents/OutputTextbox/OutputTextbox";
import PieChart from "../../OutputComponents/PieChart/PieChart";

const InvestmentLength = (props)=>{
    return <div className={`${classes.wrapper} investWrapper`}>
        <div className={`${classes.componentsBox} investComponentsBox`}>
            <EndAmount
                endAmount={props.state.investData.endAmount}
                dispatch = {props.dispatch}
                page='investmentLength'/>
            <StartingAmount
                startingAmount={props.state.investData.startingAmount}
                dispatch = {props.dispatch}
                page='investmentLength'/>
            <ReturnRate
                returnRate={props.state.investData.returnRate}
                dispatch = {props.dispatch}
                page='investmentLength'/>
            <AdditionalContribution
                additionalContribution={props.state.investData.additionalContribution}
                dispatch = {props.dispatch}
                page='investmentLength'/>

        </div>
        <div className='investResultsBox'>
            <div className='investResultsBoxHeader'>
                <p>Результаты</p>
            </div>
            <OutputTextbox pTagText='Срок вклада'
                           outputTagText={`${props.state.investData.investmentLength} месяцев`}/>
            <OutputTextbox pTagText='Чистая прибыль'
                           outputTagText={`$${props.state.investData.totalInterest}`}/>
            <OutputTextbox pTagText='Сумма всех взносов'
                           outputTagText={`$${props.state.investData.sumOfContributions}`}/>
            <OutputTextbox pTagText='Процент роста в год:'
                           outputTagText={`${props.state.investData.returnRateYear}% годовых`}/>
        </div>
        <div className='investPieChartBox'>
            <PieChart state={props.state}/>
        </div>

    </div>
}

export default InvestmentLength