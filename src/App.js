import './App.css';
import { useReducer } from 'react';
import DigitButtons from './DigitButton';
import OperatorButton from './OperatorButton';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function evaluate(pre, cur, operation) {
  pre = parseFloat(pre);
  cur = parseFloat(cur);
  switch (operation) {
    case '+':
      return pre + cur;
    case '-':
      return pre - cur;
    case '*':
      return pre * cur;
    case '÷':
      return pre / cur;
    default:
      break;
  }
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // 操作过一次的情况
      if (state.isClear) {
        return {
          ...state,
          currentOperand: `${payload.digit}`,
          isClear: false,
        }
      }
      if (state.currentOperand && state.currentOperand?.includes('.') && payload.digit === '.') return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === null || state.currentOperand === undefined) {
        return state;
      }
      if (state.currentOperand === "") {
        return {
          ...state,
          operation: payload.operator,
          previousOperand: evaluate(state.previousOperand, state.currentOperand, state.operation),
          currentOperand: "",
        }
      }
      return {
        ...state,
        operation: payload.operator,
        previousOperand: state.currentOperand,
        currentOperand: "",
      }

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.isClear) return {};
      return {
        ...state,
        currentOperand: state.currentOperand?.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state.previousOperand, state.currentOperand, state.operation),
        isClear: true,
      }
    default:
      break;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      // state
    }
  );
  return (
    <div className='container'>
      <div className="calculator-grid">
        <div className="out-put">
          <div className="output-text">{previousOperand}{operation || ""}</div>
          <div className="output-result">{currentOperand}</div>
        </div>
        <button className='btn ac' onClick={() => dispatch({
          type: ACTIONS.CLEAR
        })}>AC</button>
        <button className='btn'
          onClick={
            () => dispatch({
              type: ACTIONS.DELETE_DIGIT
            })}
        >DEL</button>
        <OperatorButton operator='÷' dispatch={dispatch}></OperatorButton>

        <DigitButtons digit="1" dispatch={dispatch}></DigitButtons>
        <DigitButtons digit="2" dispatch={dispatch}></DigitButtons>
        <DigitButtons digit="3" dispatch={dispatch}></DigitButtons>

        <OperatorButton operator='*' dispatch={dispatch}></OperatorButton>

        <DigitButtons digit="4" dispatch={dispatch}></DigitButtons>
        <DigitButtons digit="5" dispatch={dispatch}></DigitButtons>
        <DigitButtons digit="6" dispatch={dispatch}></DigitButtons>

        <OperatorButton operator='+' dispatch={dispatch}></OperatorButton>

        <DigitButtons digit="7" dispatch={dispatch}></DigitButtons>
        <DigitButtons digit="8" dispatch={dispatch}></DigitButtons>
        <DigitButtons digit="9" dispatch={dispatch}></DigitButtons>

        <OperatorButton operator='-' dispatch={dispatch}></OperatorButton>
        <button className='btn' onClick={() => dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: {
            digit: '.'
          }
        })}>.</button>
        <DigitButtons digit="0" dispatch={dispatch}></DigitButtons>
        <button className='btn equal' onClick={() => dispatch({
          type: ACTIONS.EVALUATE,
        })
        }>=</button>
      </div>
    </div >
  );
}

export default App;
