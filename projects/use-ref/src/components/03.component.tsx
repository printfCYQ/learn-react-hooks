import React, { useRef, useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)
    const time = useRef<number>(new Date().getTime())

    console.log('03.render')

    const add = () => {
        setCount(count + 1) // 组件会重新渲染 但是 time 的值不会重新初始化
    }

    const updateDate = () => {
        time.current = new Date().getTime()
        console.log(time.current) // 虽然值变了，但是组件不会重新渲染
    }

    return (
        <>
            <h2>03. 组件重新渲染时useRef不会重新初始化。useRef值变化不会触发组件重新渲染 </h2>
            <h2>count 的值：{count}， time 的值：{time.current}</h2>
            <button onClick={add}>+1</button>
            <button onClick={updateDate}>new date</button>
        </>
    )
}

export default Comp