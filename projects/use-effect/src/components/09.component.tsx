import React, { useLayoutEffect, useState } from 'react';

// useLayoutEffect 和 useEffect 的使用方式很相似：
// 1. useLayout 接收一个函数和一个依赖项数组作为参数
// 2. 只有在数组中的依赖项发生改变时才会再次执行副作用函数
// 3. useLayoutEffect 也可以返回一个清理函数

// useEffect	    在浏览器重绘之后触发	异步执行，不阻塞浏览器绘制
// useLayoutEffect	在浏览器重绘之前触发	同步执行，阻塞浏览器重新绘制

const Comp: React.FC = () => {
    const [count, setCount] = useState(Math.random() * 10)


    // 会闪烁一下
    // useEffect(() => {
    //     console.log('09-useEffect', count);
    //     if (count === 0) {
    //         setCount(Math.random() * 10)
    //     }
    // }, [count])

    useLayoutEffect(() => {
        console.log('09-useLayoutEffect', count);
        if (count === 0) {
            setCount(Math.random() * 10)
        }
    }, [count])

    return (
        <>
            <h2>09. useLayoutEffect  count 的值：{count} </h2>
            <button onClick={() => setCount(0)}>
                改为0
            </button>
        </>
    )
}

export default Comp