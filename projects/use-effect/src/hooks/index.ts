import { useEffect, useState } from "react"

export const useMousePosition = (delay: number = 0) => {
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
            }, delay)
        }

        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

    return position
}

type UseCountDown = (time?: number) => {
    count: number
    disabled: boolean
}
export const useCountDown: UseCountDown = (time: number = 10) => {
    const seconds = Math.round(Math.abs(time)) || 10
    const [count, setCount] = useState(seconds)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 1) {
                setCount(prev => prev - 1)
            } else {
                clearTimeout(timer)
                setDisabled(false)
            }
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [count])

    return {
        count,
        disabled
    }
}