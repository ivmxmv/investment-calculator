const UPDATE_ADD_CONTR_VALUE = 'UPDATE-ADDITIONAL-CONTRIBUTION-VALUE'
const UPDATE_END_AMOUNT_VALUE = 'UPDATE-END-AMOUNT-VALUE'
const UPDATE_INVEST_LENGTH_VALUE = 'UPDATE-INVESTMENT-LENGTH-VALUE'
const UPDATE_RETURN_RATE_VALUE = 'UPDATE-RETURN-RATE-VALUE'
const UPDATE_STARTING_AMOUNT_VALUE = 'UPDATE-STARTING-AMOUNT-VALUE'


const initialState = {
    additionalContribution: 1000,
    endAmount: 52768,
    investmentLength: 12,
    returnRate: 10,
    startingAmount: 10000,

    sumOfContributions: 5000,
    totalInterest: 30768,
    returnRateYear: 139.9,

    tabsInfo: [
        {URL: 'endAmount', value: 'Конечная сумма'},
        {URL: 'additionalContribution', value: 'Взнос в месяц'},
        {URL: 'returnRate', value: 'Процент роста'},
        {URL: 'startingAmount', value: 'Начальный взнос'},
        {URL: 'investmentLength', value: 'Срок вклада'},
        {URL: 'table', value: 'Таблица данных'},
    ],
    data: [{
        currentMonth: 1,
        startingAmount: 2,
        currentContrs: 3,
        currentAmount: 4,
        currentInterest: 5,
        currentSumPercent: 6,
        currentEndAmount: 7,
        endAmount: 8,
    },]
}


export const investReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_ADD_CONTR_VALUE:
            state.additionalContribution = parseInt(action.value)

            break;
        case UPDATE_END_AMOUNT_VALUE:
            state.endAmount = parseInt(action.value)
            break;
        case UPDATE_INVEST_LENGTH_VALUE:
            state.investmentLength = parseFloat(action.value).toFixed(0)
            break;
        case UPDATE_RETURN_RATE_VALUE:
            state.returnRate = parseFloat(action.value).toFixed(1)

            break;
        case UPDATE_STARTING_AMOUNT_VALUE:
            state.startingAmount = parseInt(action.value)
            break;
    }


    // Находит конечную сумму
    const endAmount = (investmentLength) => {
        let start = state.startingAmount
            * Math.pow(1 + state.returnRate / 100, investmentLength)
        let add = 0
        if (investmentLength !== 0)
            add = state.additionalContribution
                * ((Math.pow(state.returnRate / 100 + 1, investmentLength) - 1)
                    / (state.returnRate / 100))
        return Math.trunc(start + add)
    }

    // Находит процентную ставку до сотых
    const returnRate = () => {
        let end = state.endAmount
        let add = state.additionalContribution
        let sum

        for (let i = 1; i <= 2; i += 0.0001) {
            sum = state.startingAmount
            for (let month = 1; month <= state.investmentLength; month++) {
                sum = parseInt(sum) * i + parseInt(add)
            }
            if (parseInt(sum) >= parseInt(end)) {
                return ((i - 1) * 100).toFixed(1)

            }
            if (i >= 1.999) {
                return NaN

            }

        }
    }

    // Обновляет таблицу с данными
    const updateTableData = () => {

        let data = []
        for (let month = 1; month <= state.investmentLength; month++) {
            let currentMonth = month
            let currentContrs = state.startingAmount + state.additionalContribution * month
            let currentAmount = endAmount(month - 1)
            let currentEndAmount = endAmount(month)
            let currentInterest = currentEndAmount - currentContrs
            let currentSumPercent = currentInterest / currentContrs * 100

            const push = () => data.push(
                {
                    currentMonth: currentMonth,
                    startingAmount: '$' + state.startingAmount,
                    currentContrs: '$' + currentContrs,
                    currentAmount: '$' + currentAmount,
                    currentInterest: '$' + currentInterest,
                    currentSumPercent: currentSumPercent.toFixed(1) + '%',
                    currentEndAmount: '$' + currentEndAmount,
                    endAmount: '$' + state.endAmount,
                })

            push()
            if (Math.trunc(state.investmentLength) < state.investmentLength && month === parseInt(state.investmentLength)) {
                currentMonth = state.investmentLength
                currentContrs = state.startingAmount + state.additionalContribution * month
                currentAmount = endAmount(currentMonth - 1)
                currentEndAmount = endAmount(currentMonth)
                currentInterest = currentEndAmount - currentContrs
                currentSumPercent = currentInterest / currentContrs * 100
                push()
            }

        }
        state.data = data
    }

    switch (action.page) {
        case 'endAmount':
            state.endAmount = endAmount(state.investmentLength)
            break;

        case 'additionalContribution':
            let first = state.endAmount - Math.pow(state.returnRate / 100 + 1, state.investmentLength) * state.startingAmount
            let second = state.returnRate / 100
            let third = Math.pow(state.returnRate / 100 + 1, state.investmentLength) - 1

            state.additionalContribution = Math.round(first * second / third)
            break;

        case 'returnRate':

            state.returnRate = returnRate()
            break;

        case 'startingAmount':
            let percent = Math.pow(state.returnRate / 100 + 1, state.investmentLength)
            state.startingAmount = Math.round(state.endAmount / percent
                - (state.additionalContribution * (percent - 1)) / (state.returnRate / 100 * percent))
            break;

        case 'investmentLength':
            state.investmentLength = NaN
            for (let i = 0; i <= 500; i += 0.01) {

                let start1 = state.startingAmount
                    * Math.pow(1 + state.returnRate / 100, i)
                let add3 = state.additionalContribution
                    * ((Math.pow(state.returnRate / 100 + 1, i) - 1)
                        / (state.returnRate / 100))
                if (state.endAmount <= start1 + add3) {
                    state.investmentLength = i.toFixed(2)
                    break;
                }
            }
            break;
    }

    state.sumOfContributions = Math.trunc((state.additionalContribution * state.investmentLength) + parseInt(state.startingAmount))
    state.totalInterest = Math.trunc(state.endAmount - state.sumOfContributions)
    state.returnRateYear = (state.totalInterest / state.sumOfContributions / state.investmentLength * 100 * 12).toFixed(1)

    // Обновляем данные в таблице при каждом изменении state
    updateTableData()

    // reducer на то и reducer, что после изменения state
    // мы возвращаем обратно измененный state

    return state
}

export const addContrValueChangeActionCreator =
    (value, page) => ({
        type: UPDATE_ADD_CONTR_VALUE,
        value: value,
        page: page
    })

export const endAmountValueChangeActionCreator =
    (value, page) => ({
        type: UPDATE_END_AMOUNT_VALUE,
        value: value,
        page: page
    })

export const investLengthValueChangeActionCreator =
    (value, page) => ({
        type: UPDATE_INVEST_LENGTH_VALUE,
        value: value,
        page: page
    })

export const returnRateValueChangeActionCreator =
    (value, page) => ({
        type: UPDATE_RETURN_RATE_VALUE,
        value: value,
        page: page
    })

export const startingAmountValueChangeActionCreator =
    (value, page) => ({
        type: UPDATE_STARTING_AMOUNT_VALUE,
        value: value,
        page: page
    })

