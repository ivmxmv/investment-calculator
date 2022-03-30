import classes from './InvestmentLength.module.css'
import React from "react";
import {

    investLengthValueChangeActionCreator
} from "../../../../../redux/investReducer";

const InvestmentLength = (props)=>{

    // Ссылка на элемент
    const refObject = new React.createRef()

    // Отправляет данные в store из элемента
    const valueChanged = () => {
        const value = refObject.current.value
        const page = props.page
        props.dispatch(investLengthValueChangeActionCreator(value, page))
    }

    // Ссылка на слайдер
    const refSlider = new React.createRef()
    // Отправляет данные в store из элемента
    const sliderChanged = () => {
        const value = refSlider.current.value
        const page = props.page
        props.dispatch(investLengthValueChangeActionCreator(value, page))
    }

    return <div className={`${classes.wrapper} widget`}>
        <p className='widgetName'>Срок инвестиции:</p>
        <div className='textAreaBox'>
            <textarea
                className="textAreaWidget textAreaDisabledWidget"
                cols="14"
                rows="1"
                value="Месяцев"
                disabled={true}
                >
            </textarea>
            <input type="number"
                   ref={refObject}
                   className="textAreaWidget textAreaActiveWidget"
                   onChange={valueChanged}
                   value={props.investmentLength}/>
        </div>
        <div className={classes.sliderBox}>
            <input type="range"
                   min="1"
                   max="360"
                   step={1}
                   ref={refSlider}
                   onChange={sliderChanged}
                   value={props.investmentLength}/>
        </div>
    </div>
}

export default InvestmentLength