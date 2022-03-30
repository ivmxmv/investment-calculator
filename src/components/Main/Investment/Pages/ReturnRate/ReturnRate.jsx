import classes from './ReturnRate.module.css'
import AdditionalContribution from "../../InputComponents/AdditionalContribution/AdditionalContribution";
import InvestmentLength from "../../InputComponents/InvestmentLength/InvestmentLength";
import StartingAmount from "../../InputComponents/StartingAmount/StartingAmount";
import EndAmount from "../../InputComponents/EndAmount/EndAmount";
import OutputTextbox from "../../OutputComponents/OutputTextbox/OutputTextbox";
import PieChart from "../../OutputComponents/PieChart/PieChart";

const ReturnRate = (props) => {
    return <div className={`${classes.wrapper} investWrapper`}>
        <div className={`${classes.componentsBox} investComponentsBox`}>
            <EndAmount
                endAmount={props.state.investData.endAmount}
                dispatch={props.dispatch}
                page='returnRate'/>
            <StartingAmount
                startingAmount={props.state.investData.startingAmount}
                dispatch={props.dispatch}
                page='returnRate'/>
            <InvestmentLength
                investmentLength={props.state.investData.investmentLength}
                dispatch={props.dispatch}
                page='returnRate'/>
            <AdditionalContribution
                additionalContribution={props.state.investData.additionalContribution}
                dispatch={props.dispatch}
                page='returnRate'/>

        </div>
        <div className='investResultsBox'>
            <div className='investResultsBoxHeader'>
                <p>Результаты</p>
            </div>

            <OutputTextbox pTagText='Процент роста в месяц'
                           outputTagText={`${props.state.investData.returnRate}% в месяц`}/>
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

export default ReturnRate