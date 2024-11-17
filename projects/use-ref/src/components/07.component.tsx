import React, { useImperativeHandle, useRef, useState } from 'react';

const Child = React.forwardRef((_, ref) => {

    const [count, setCount] = useState(0)
    useImperativeHandle(ref, () => {
        return {
            count,
            setCount
        }
    })
    return (
        <>
            <h2>子组件: count 的值：{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
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
            <h2>07. 父组件使用子组件的变量和方法 </h2>
            <button onClick={resetChild}>重置子组件</button>
            <Child ref={childRef} />
        </>
    )
}

export default Comp