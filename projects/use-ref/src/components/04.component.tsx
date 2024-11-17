import React, { useEffect, useRef, useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)
    const time = useRef<number>(new Date().getTime())

    // useEffect 在组件首次渲染时会执行 
    // 每次组件重新渲染完毕后都会执行（当依赖项发生变化时才会执行）
    useEffect(() => {
        console.log('04.useEffect') // 当time的值发生变化时不会打印，因为 time 是useRef（useRef 对象本身在内存中的引用并没有改变）
    }, [time.current])

    const add = () => {
        setCount(count + 1)
    }

    const updateDate = () => {
        time.current = new Date().getTime()
        console.log(time.current)
    }

    return (
        <>
            <h2>04. useRef 不能作为其它 Hooks 的依赖项 </h2>
            <h2>count 的值：{count}， time 的值：{time.current}</h2>
            <button onClick={add}>+1</button>
            <button onClick={updateDate}>new date</button>
        </>
    )
}

export default Comp