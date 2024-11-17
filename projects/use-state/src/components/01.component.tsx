import React, { useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)
    
    const add = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h2>01.useState  Count 的值：{count}</h2>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Comp