import classes from './OutputTextbox.module.css'

const OutputTextbox = (props)=>{
    return <div className='investOutputElement'>
        <p>{props.pTagText}</p>
        <output>{props.outputTagText}</output>
    </div>
}

export default OutputTextbox