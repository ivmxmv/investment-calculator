import {VictoryBar, VictoryLabel, VictoryPie, VictorySharedEvents} from "victory";

const PieChart = (props)=>{
    let start = parseInt(props.state.investData.startingAmount)
    let addSum = props.state.investData.additionalContribution*props.state.investData.investmentLength
    let end = props.state.investData.endAmount
    return <div>
        <svg viewBox="-25 0 350 505">
            <VictorySharedEvents
                events={[{
                    childName: ["pie", "bar"],
                    target: "data",
                    eventHandlers: {
                        onMouseOver: () => {
                            return [{
                                childName: ["pie", "bar"],
                                mutation: (props) => {
                                    return {
                                        style: Object.assign({}, props.style, {fill: "tomato"})
                                    };
                                }
                            }];
                        },
                        onMouseOut: () => {
                            return [{
                                childName: ["pie", "bar"],
                                mutation: () => {
                                    return null;
                                }
                            }];
                        }
                    }
                }]}
            >
                <g transform={"translate(0, 225)"}>
                    <VictoryBar name="bar"
                                width={300}
                                standalone={false}
                                style={{
                                    data: { width: 20 },
                                    labels: {fontSize: 20}
                                }}
                                data={[
                                    {x: "a", y: start},
                                    {x: "b", y: addSum},
                                    {x: "c", y: props.state.investData.totalInterest}
                                ]}
                                labels={["Стартовый", "Взносы", "Прибыль", "d"]}
                                labelComponent={<VictoryLabel y={290}/>}
                    />
                </g>
                <g transform={"translate(0, -50)"}>
                    <VictoryPie name="pie"
                                width={300}
                                standalone={false}
                                style={{ labels: {fontSize: 20, padding: 10}}}
                                data={[
                                    {x: `${(start/end*100).toFixed(1)}%`, y: parseInt(props.state.investData.startingAmount)},
                                    {x: `${(addSum/end*100).toFixed(1)}%`, y: props.state.investData.sumOfContributions-props.state.investData.startingAmount},
                                    {x: `${(props.state.investData.totalInterest/end*100).toFixed(1)}%`, y: props.state.investData.totalInterest}
                                ]}
                    />
                </g>
            </VictorySharedEvents>
        </svg>
    </div>
}

export default PieChart