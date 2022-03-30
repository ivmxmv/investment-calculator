import classes from './StartingAmount.module.css'
import AdditionalContribution from "../../InputComponents/AdditionalContribution/AdditionalContribution";
import InvestmentLength from "../../InputComponents/InvestmentLength/InvestmentLength";
import ReturnRate from "../../InputComponents/ReturnRate/ReturnRate";
import EndAmount from "../../InputComponents/EndAmount/EndAmount";
import OutputTextbox from "../../OutputComponents/OutputTextbox/OutputTextbox";
import PieChart from "../../OutputComponents/PieChart/PieChart";


const StartingAmount = (props) => {
    return <div className={`${classes.wrapper} investWrapper`}>
        <div className={`${classes.componentsBox} investComponentsBox`}>
            <EndAmount
                endAmount={props.state.investData.endAmount}
                dispatch={props.dispatch}
                page='startingAmount'/>
            <InvestmentLength
                investmentLength={props.state.investData.investmentLength}
                dispatch={props.dispatch}
                page='startingAmount'/>
            <ReturnRate
                returnRate={props.state.investData.returnRate}
                dispatch={props.dispatch}
                page='startingAmount'/>
            <AdditionalContribution
                additionalContribution={props.state.investData.additionalContribution}
                dispatch={props.dispatch}
                page='startingAmount'/>

        </div>
        <div className='investResultsBox'>
            <div className='investResultsBoxHeader'>
                <p>Результаты</p>
            </div>
            <OutputTextbox pTagText='Начальный взнос'
                           outputTagText={`$${props.state.investData.startingAmount}`}/>
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

export default StartingAmount