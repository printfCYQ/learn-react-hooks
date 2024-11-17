import React, { useReducer } from 'react';

type IState = {
    count: number
}

type IAction = {
    type: 'INCREMENT' | 'DECREMENT';
};
const Comp: React.FC = () => {
    const initialState: IState = { count: -1 };

    // 形参：初始数据，返回值：修改后的数据
    const initAction = (state: IState) => {
        if (state.count !== 0) {
            return {
                count: 0
            }
        }
        return state
    }

    const reducer = (state: IState, action: IAction) => {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 };
            case 'DECREMENT':
                return { count: state.count - 1 };
            default:
                return state;
        }
    }

    // 不能直接修改 state ，需要使用 dispatch（dispatch 会触发 reducer 的执行）
    const [state, dispatch] = useReducer(reducer, initialState, initAction);

    return (
        <>
            <h2>01. useReducer 基本使用</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </>
    )
}

export default Comp