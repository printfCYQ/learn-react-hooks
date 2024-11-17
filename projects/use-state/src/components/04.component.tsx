import React, { useEffect, useState } from 'react';

const Count: React.FC = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect', count); // 是最新值,在组件初始化时会执行
    }, [count])

    const add = () => {
        setCount(count + 1)
        console.log('add', count); // 不是最新值
    }
    return (
        <>
            <h2>04.useState 异步  Count 的值：{count}</h2>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Count