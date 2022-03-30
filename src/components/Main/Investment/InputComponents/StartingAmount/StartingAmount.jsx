import classes from './StartingAmount.module.css'
import React from "react";
import {
    startingAmountValueChangeActionCreator
} from "../../../../../redux/investReducer";

const StartingAmount = (props)=>{

    // Ссылка на элемент
    const refObject = new React.createRef()

    // Отправляет данные в store из элемента
    const valueChanged = () => {
        const value = refObject.current.value
        const page = props.page
        props.dispatch(startingAmountValueChangeActionCreator(value, page))
    }

    // Ссылка на слайдер
    const refSlider = new React.createRef()
    // Отправляет данные в store из элемента
    const sliderChanged = () => {
        const value = refSlider.current.value
        const page = props.page
        props.dispatch(startingAmountValueChangeActionCreator(value, page))
    }

    return <div className={`${classes.wrapper} widget`}>
        <p className='widgetName'>Стартовая сумма:</p>
        <div className='textAreaBox'>
            <textarea
                className="textAreaWidget textAreaDisabledWidget"
                cols="1"
                rows="1"
                value="$"
                disabled={true}>
            </textarea>
            <input type="number"
                   ref={refObject}
                   className="textAreaWidget textAreaActiveWidget"
                   onChange={valueChanged}
                   value={props.startingAmount}/>
        </div>
        <div className={classes.sliderBox}>
            <input type="range"
                   min="100"
                   max="100000"
                   step={50}
                   ref={refSlider}
                   onChange={sliderChanged}
                   value={props.startingAmount}/>
        </div>
    </div>
}

export default StartingAmount