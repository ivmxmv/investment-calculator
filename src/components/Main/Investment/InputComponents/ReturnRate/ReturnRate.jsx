import classes from './ReturnRate.module.css'
import React from "react";
import {
    returnRateValueChangeActionCreator
} from "../../../../../redux/investReducer";

const ReturnRate = (props)=>{

    // Ссылка на элемент
    const refObject = new React.createRef()

    // Отправляет данные в store из элемента
    const valueChanged = () => {
        const value = refObject.current.value
        const page = props.page
        props.dispatch(returnRateValueChangeActionCreator(value, page))
    }

    // Ссылка на слайдер
    const refSlider = new React.createRef()
    // Отправляет данные в store из элемента
    const sliderChanged = () => {
        const value = refSlider.current.value
        const page = props.page
        props.dispatch(returnRateValueChangeActionCreator(value, page))
    }

    return <div className={`${classes.wrapper} widget`}>
        <p className='widgetName'>Процент роста в месяц:</p>
        <div className='textAreaBox'>

            <textarea
                className="textAreaWidget textAreaDisabledWidget"
                cols="1"
                rows="1"
                value="%"
                disabled={true}
            >
            </textarea>
            <input type="number"

                   ref={refObject}
                   className="textAreaWidget textAreaActiveWidget"
                   onChange={valueChanged}
                   value={props.returnRate}/>
        </div>
        <div className={classes.sliderBox}>
            <input type="range"
                   min="0.1"
                   max="10"
                   step={0.1}
                   ref={refSlider}
                   onChange={sliderChanged}
                   value={props.returnRate}/>
        </div>
    </div>
}

export default ReturnRate