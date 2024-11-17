import React, { useState } from 'react';

const Count: React.FC = () => {
    const [count, setCount] = useState(0)
    const add = () => {
        // 两次只会执行一次
        setCount(count + 1)
        setCount(count + 2)
    }

    const addFn = () => {
        // 两次都会执行
        setCount(prev => prev + 1)
        setCount(prev => prev + 2)
    }
    return (
        <>
            <h2>05.值更新不及时的BUG  Count 的值：{count}</h2>
            <button onClick={add}>+1</button>
            <button onClick={addFn}>函数形式 +1</button>
        </>
    )
}

export default Count