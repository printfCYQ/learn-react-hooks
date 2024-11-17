import React, { useImperativeHandle, useRef } from 'react';

const Child = React.forwardRef((_, ref) => {

    // useImperativeHandle 向父组件暴露子组件的实例 暴露哪些 父组件能拿到哪些
    useImperativeHandle(ref, () => {
        return {
            a: 1
        }
    })
    return (
        <>
            <h2>子组件</h2>
        </>
    )
})

const Comp: React.FC = () => {
    const childRef = useRef()

    const getChild = () => {
        console.log(childRef.current) // {a: 1}
    }
    return (
        <>
            <h2>06. forwardRef & useImperativeHandle 获取到子组件的实例 </h2>
            <Child ref={childRef} />
            <button onClick={getChild}>获取子组件实例</button>
        </>
    )
}

export default Comp