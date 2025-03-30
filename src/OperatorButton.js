import { ACTIONS } from './App.js'

const OperatorButton = ({ operator, dispatch }) => {
    // console.log('digit', digit, dispatch);
    return (
        <>
            <button className='btn' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operator } })}>{operator}</button>
        </>
    )
}

export default OperatorButton;