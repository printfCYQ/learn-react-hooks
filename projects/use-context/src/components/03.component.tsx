import React, { useContext } from 'react';
import { useImmerReducer } from 'use-immer';

type UserType = typeof defaultState
type ActionType = { type: 'UPDATE_NAME'; payload: string } | { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number } | { type: 'RESET' }
type ContextType = { user: UserType; dispatch: React.Dispatch<ActionType> }

const defaultState = { name: 'CYQ', age: 18 }

const reducer = (prevState: UserType, action: ActionType) => {
    console.log('触发了 reducer 的执行')
    console.log(action)

    switch (action.type) {
        case 'UPDATE_NAME':
            prevState.name = action.payload
            break
        case 'INCREMENT':
            prevState.age += action.payload
            break
        case 'DECREMENT':
            prevState.age -= action.payload
            break
        case 'RESET':
            return initAction(defaultState)
        default:
            return prevState
    }
}

const initAction = (initState: UserType) => {
    return { ...initState, age: Math.round(Math.abs(initState.age)) || 18 }
}

// 1. 创建 Context 对象
const UserInfoContext = React.createContext<ContextType>({} as ContextType)

// 2. 创建 Wrapper 组件
export const UserInfoContextWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(reducer, defaultState, initAction)
    return <UserInfoContext.Provider value={{ user: state, dispatch }}>{children}</UserInfoContext.Provider>
}

const Child1: React.FC = () => {
    const { user, dispatch } = useContext(UserInfoContext)

    const add = () => dispatch({ type: 'INCREMENT', payload: 1 })

    return (
        <div style={{ flex: 1, backgroundColor: '#374E7E' }}>
            <p>{JSON.stringify(user)}</p>
            <button onClick={add}>年龄+1</button>
        </div>
    )
}

const Child2: React.FC = () => {
    const { user, dispatch } = useContext(UserInfoContext)
    const sub = () => dispatch({ type: 'DECREMENT', payload: 5 })

    return (
        <div style={{ flex: 1, backgroundColor: '#666418' }}>
            <p>{JSON.stringify(user)}</p>
            <button onClick={sub}>年龄-5</button>
            <hr />
            <GrandSon />
        </div>
    )
}

const GrandSon: React.FC = () => {
    const { dispatch } = React.useContext(UserInfoContext)

    const reset = () => dispatch({ type: 'RESET' })

    return (
        <div style={{ backgroundColor: '#B38989' }}>
            <h3>这是 GrandSon 组件</h3>
            <button onClick={reset}>重置</button>
        </div>
    )
}


export const Comp: React.FC = () => {
    const { user, dispatch } = useContext(UserInfoContext)

    const changeUserName = () => {
        dispatch({ type: 'UPDATE_NAME', payload: 'cyq' })
    }

    return (
        <div>
            <h2>03.useContext  重构 useReducer 案例</h2>
            <button onClick={changeUserName}>修改用户名</button>
            <p>{JSON.stringify(user)}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Child1 />
                <Child2 />
            </div>
        </div>
    )
}

export default Comp  