import React, { useEffect, useState } from 'react';

const Child: React.FC = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        let timerId: null | number = null
        const handleMove = (e: MouseEvent) => {
            if (timerId !== null) {
                return
            }
            timerId = setTimeout(() => {
                console.log('06-useEffect', e.clientX, e.clientY);
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
                timerId = null
            }, 100)
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
            <h2>06. useEffect mousemove添加节流</h2>
            <button onClick={toggle}>toggle child</button>
            {flag && <Child />}
        </>
    )
}

export default Comp