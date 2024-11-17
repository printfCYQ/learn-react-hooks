import React, { useEffect, useState } from 'react';

// useEffect 参数
// 第一个参数 fn 是一个副作用函数，该函数会在每次渲染完成之后被调用；
// 第二个参数是可选的依赖项数组，这个数组中的每一项内容都会被用来进行渲染前后的对比
// 当依赖项发生变化时，会重新执行 fn 副作用函数
// 当依赖项没有任何变化时，则不会执行 fn 副作用函数

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)

    console.log('01', document.querySelector('#count')?.innerHTML); // 上一次的值

    const add = () => {
        setCount(count + 1)
    }

    // 在组件每次渲染完成之后，都会重新直接useEffect的回调函数
    useEffect(() => {
        console.log('01-useEffect', document.querySelector('#count-01')?.innerHTML); // 最新的值
    })

    return (
        <>
            <h2>01. useEffect 的执行时机</h2>
            <h2 id='count-01'>count 的值：{count}</h2>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Comp