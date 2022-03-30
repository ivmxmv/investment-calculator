import classes from './AdditionalContribution.module.css'
import InvestmentLength from "../../InputComponents/InvestmentLength/InvestmentLength";
import ReturnRate from "../../InputComponents/ReturnRate/ReturnRate";
import StartingAmount from "../../InputComponents/StartingAmount/StartingAmount";
import EndAmount from "../../InputComponents/EndAmount/EndAmount";
import OutputTextbox from "../../OutputComponents/OutputTextbox/OutputTextbox";
import PieChart from "../../OutputComponents/PieChart/PieChart";
import Table from "../../OutputComponents/Table/InvestTable";

const AdditionalContribution = (props) => {
    return <div className={`${classes.wrapper} investWrapper`}>
        <div className={`${classes.componentsBox} investComponentsBox`}>
            <EndAmount
                endAmount={props.state.investData.endAmount}
                dispatch={props.dispatch}
                page='additionalContribution'/>
            <StartingAmount
                startingAmount={props.state.investData.startingAmount}
                dispatch={props.dispatch}
                page='additionalContribution'/>
            <InvestmentLength
                investmentLength={props.state.investData.investmentLength}
                dispatch={props.dispatch}
                page='additionalContribution'/>
            <ReturnRate
                returnRate={props.state.investData.returnRate}
                dispatch={props.dispatch}
                page='additionalContribution'/>
        </div>
        <div className='investResultsBox'>
            <div className='investResultsBoxHeader'>
                <p>Результаты</p>
            </div>
            <OutputTextbox pTagText='Ежемесячный взнос'
                           outputTagText={`$${props.state.investData.additionalContribution}`}/>
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
        <div className='investTableBox'>
        </div>
    </div>
}

export default AdditionalContribution