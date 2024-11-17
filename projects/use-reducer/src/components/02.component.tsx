import React from 'react';
import { useImmerReducer } from 'use-immer';

type UserType = typeof defaultState
type ActionType = { type: 'UPDATE_NAME'; payload: string } | { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number } | { type: 'RESET' }

// 初始状态
const defaultState = { name: 'CYQ', age: 18 }

// 在 reducer 函数的形参中：
// 第一个参数，永远都是上一次的旧状态
const reducer = (prevState: UserType, action: ActionType) => {
  console.log('触发了 reducer 的执行')
  console.log(action)

  // useImmerReducer 实现了，可以直接修改变量
  switch (action.type) {
    case 'UPDATE_NAME':
      // return { ...prevState, name: action.payload }
      prevState.name = action.payload
      break
    case 'INCREMENT':
      // return { ...prevState, age: prevState.age + action.payload }
      prevState.age += action.payload
      break
    case 'DECREMENT':
      // return { ...prevState, age: prevState.age - action.payload }
      prevState.age -= action.payload
      break
    case 'RESET':
      return initAction(defaultState)
    default:
      return prevState
  }
}

// 形参：是初始状态
// 返回值：处理好的初始状态
const initAction = (initState: UserType) => {
  return { ...initState, age: Math.round(Math.abs(initState.age)) || 18 }
}

const Child1: React.FC<UserType & { dispatch: React.Dispatch<ActionType> }> = (props) => {
  const { dispatch, ...user } = props

  const add = () => dispatch({ type: 'INCREMENT', payload: 1 })

  return (
    <div style={{ flex: 1, backgroundColor: '#374E7E' }}>
      <p>{JSON.stringify(user)}</p>
      <button onClick={add}>年龄+1</button>
    </div>
  )
}

const Child2: React.FC<UserType & { dispatch: React.Dispatch<ActionType> }> = (props) => {
  const { dispatch, ...user } = props

  const sub = () => dispatch({ type: 'DECREMENT', payload: 5 })

  return (
    <div style={{ flex: 1, backgroundColor: '#666418' }}>
      <p>{JSON.stringify(user)}</p>
      <button onClick={sub}>年龄-5</button>
      <hr />
      <GrandSon dispatch={dispatch} />
    </div>
  )
}

const GrandSon: React.FC<{ dispatch: React.Dispatch<ActionType> }> = (props) => {
  const reset = () => props.dispatch({ type: 'RESET' })

  return (
    <div style={{ backgroundColor: '#B38989' }}>
      <h3>这是 GrandSon 组件</h3>
      <button onClick={reset}>重置</button>
    </div>
  )
}


export const Comp: React.FC = () => {
  const [state, dispatch] = useImmerReducer(reducer, defaultState, initAction)

  const changeUserName = () => {
    // 不能直接修改 state 数据源
    dispatch({ type: 'UPDATE_NAME', payload: 'cyq' })
  }

  return (
    <div>
      <button onClick={changeUserName}>修改用户名</button>
      <p>{JSON.stringify(state)}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Child1 {...state} dispatch={dispatch} />
        <Child2 {...state} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default Comp  