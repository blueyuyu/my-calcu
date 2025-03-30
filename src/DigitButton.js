import { ACTIONS } from './App.js'

const DigitButtons = ({ digit, dispatch }) => {
    // console.log('digit', digit, dispatch);
    return (
        <>
            <button className='btn' onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
        </>
    )
}

export default DigitButtons;