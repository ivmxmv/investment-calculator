import classes from './EndAmount.module.css'
import AdditionalContribution from "../../InputComponents/AdditionalContribution/AdditionalContribution";
import InvestmentLength from "../../InputComponents/InvestmentLength/InvestmentLength";
import StartingAmount from "../../InputComponents/StartingAmount/StartingAmount";
import ReturnRate from "../../InputComponents/ReturnRate/ReturnRate";
import OutputTextbox from "../../OutputComponents/OutputTextbox/OutputTextbox";
import PieChart from "../../OutputComponents/PieChart/PieChart";


const EndAmount = (props) => {

    return <div className={`${classes.wrapper} investWrapper`}>
        <div className={`${classes.componentsBox} investComponentsBox`}>
            <StartingAmount
                startingAmount={props.state.investData.startingAmount}
                dispatch={props.dispatch}
                page='endAmount'/>
            <InvestmentLength
                investmentLength={props.state.investData.investmentLength}
                dispatch={props.dispatch}
                page='endAmount'/>
            <ReturnRate
                returnRate={props.state.investData.returnRate}
                dispatch={props.dispatch}
                page='endAmount'/>
            <AdditionalContribution
                additionalContribution={props.state.investData.additionalContribution}
                dispatch={props.dispatch}
                page='endAmount'/>
        </div>
        <div className='investResultsBox'>
            <div className='investResultsBoxHeader'>
                <p>Результаты</p>

            </div>
            <OutputTextbox pTagText='Конечная сумма'
                           outputTagText={`$${props.state.investData.endAmount}`}/>
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

export default EndAmount