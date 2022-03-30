import classes from './EndAmount.module.css'
import React from "react";
import {endAmountValueChangeActionCreator} from "../../../../../redux/investReducer";

const EndAmount = (props) => {

    // Ссылка на элемент
    const refObject = new React.createRef()
    // Отправляет данные в store из элемента
    const valueChanged = () => {
        const value = refObject.current.value
        const page = props.page
        props.dispatch(endAmountValueChangeActionCreator(value,page))
    }

    // Ссылка на слайдер
    const refSlider = new React.createRef()
    // Отправляет данные в store из элемента
    const sliderChanged = () => {
        const value = refSlider.current.value
        const page = props.page
        props.dispatch(endAmountValueChangeActionCreator(value,page))
    }


    return <div className={`${classes.wrapper} widget`}>
        <p className='widgetName'>Ваша цель:</p>
        <div className='textAreaBox'>
            <textarea
                className="textAreaWidget textAreaDisabledWidget"
                cols="1"
                rows="1"
                value='$'
                disabled={true}>
            </textarea>
            <input type="number"
                   ref={refObject}
                   className="textAreaWidget textAreaActiveWidget"
                   onChange={valueChanged}
                   value={props.endAmount}/>
        </div>
        <div className={classes.sliderBox}>
            <input
                type="range"
                min="1000"
                max="1000000"
                step={50}
                ref={refSlider}
                onChange={sliderChanged}
                value={props.endAmount}/>
        </div>
    </div>
}

export default EndAmount