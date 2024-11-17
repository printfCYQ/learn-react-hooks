import React, { useEffect, useState } from 'react';

const Child: React.FC = () => {
    const [title, setTitle] = useState('')
    useEffect(() => {
        const controller = new AbortController()
        const querydata = async () => {
            fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: controller.signal })
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title)
                }).catch(err => console.log(err.message))
        }
        querydata()
        return () => {
            // 两个执行时机
            // 1. 组件被卸载时
            // 2. 副作用函数执行前
            console.log('04-useEffect-child-清理副作用')
            controller.abort()
        }
    })
    return (
        <>
            <h2>子组件:title的值：{title}</h2>
        </>
    )
}

const Comp: React.FC = () => {
    const [flag, setFlag] = useState(true)

    const toggle = () => {
        setFlag(flag => !flag)
    }

    return (
        <>
            <h2>04. useEffect 可以返回一个函数，清理副作用</h2>
            <button onClick={toggle}>toggle child</button>
            {flag && <Child />}
        </>
    )
}

export default Comp