import React, { useEffect, useState } from 'react';

const Child: React.FC = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            console.log('05-useEffect',e.clientX, e.clientY);
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

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
            <h2>05. useEffect 组件卸载后，解绑事件</h2>
            <button onClick={toggle}>toggle child</button>
            {flag && <Child />}
        </>
    )
}

export default Comp