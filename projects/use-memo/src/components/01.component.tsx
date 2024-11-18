import React from 'react';

const Child1: React.FC<{ count: number }> = (props) => {
    console.log('01-普通子组件渲染');
    return (
        <div>普通子组件:{props.count}</div>
    )
}

// React.memo 只有props发生变化时才会重新渲染
const Child2: React.FC<{ count: number }> = React.memo((props) => {
    console.log('01-memo子组件渲染');
    return (
        <div>memo子组件:{props.count}</div>
    )
})

const Comp: React.FC = () => {

    const [count, setCount] = React.useState(0)
    const [flag, setFlag] = React.useState(false)
    return (
        <>
            <h2>01. React.memo 避免子组件不必要的刷新</h2>
            <p>Count: {count}</p>
            <p>Flag: {String(flag)}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setFlag(flag => !flag)}>toggle flag</button>
            <Child1 count={count}></Child1>
            <Child2 count={count}></Child2>
        </>
    )
}

export default Comp