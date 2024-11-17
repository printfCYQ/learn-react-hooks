import { useMousePosition } from '@/hooks';
import React, { useState } from 'react';

const Child: React.FC = () => {
 const position = useMousePosition(200)

    return (
        <>
            <h2>子组件: 鼠标位置{JSON.stringify(position)}</h2>
        </>
    )
}

const Comp: React.FC = () => {
    const [flag, setFlag] = useState(true)

    const toggle = () => {
        setFlag(flag => !flag)
    }

    return (
        <>
            <h2>07. useEffect 封装自定义hooks</h2>
            <button onClick={toggle}>toggle child</button>
            {flag && <Child />}
        </>
    )
}

export default Comp