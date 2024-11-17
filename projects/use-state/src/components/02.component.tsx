import React, { useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0) // 只在初始化时执行一次（默认值）

    console.log('02.render'); // count 变化时会重新渲染组件

    const add = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h2>02.useState Count 的值：{count}, count 变化时会重新渲染组件</h2>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Comp