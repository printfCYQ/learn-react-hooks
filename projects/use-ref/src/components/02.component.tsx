import React, { useRef, useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef<number>() // 默认为 undefined

    const add = () => {
        setCount(prev => prev + 1)
        prevCountRef.current = count
    }

    return (
        <>
            <h2>02. 存储渲染周期之间的共享数据</h2>
            <h2>count 的新值：{count}， count 的旧值：{prevCountRef.current}</h2>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Comp