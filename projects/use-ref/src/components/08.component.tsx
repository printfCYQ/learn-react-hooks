import React, { useImperativeHandle, useRef, useState } from 'react';

const Child = React.forwardRef((_, ref) => {

    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    useImperativeHandle(ref, () => {
        // 组件初始化会执行（不执行--父组件就拿不到子组件的最新实例）
        // 第三个参数是数组，可以不写
        // 1.不写的时候，任何情况导致组件重新渲染 都会执行
        // 2.写了的时候（[count]），数组内的依赖项 导致组件重新渲染才会执行
        // 3.空数组（[]），任何情况都不会执行，只有第一次执行
        console.log('08.useImperativeHandle');
        return {
            count,
            setCount
        }
    }, [])
    return (
        <>
            <h2>子组件: count 的值：{count}</h2>
            <h2>子组件: flag 的值：{String(flag)}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setFlag(flag => !flag)}>flag</button>
        </>
    )
})

const Comp: React.FC = () => {
    const childRef = useRef<{
        count: number
        setCount: (count: number) => void
    }>()

    const resetChild = () => {
        childRef.current?.setCount(0)
    }
    return (
        <>
            <h2>08. useImperativeHandle的第三个参数 </h2>
            <button onClick={resetChild}>重置子组件</button>
            <button onClick={() => console.log(childRef.current)}>获取子组件</button>
            <Child ref={childRef} />
        </>
    )
}

export default Comp