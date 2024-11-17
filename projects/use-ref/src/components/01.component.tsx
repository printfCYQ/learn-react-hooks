import React, { useRef } from 'react';

const Comp: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    
    const focusInput = () => {
        inputRef.current?.focus()
    }

    return (
        <>
            <h2>01. useRef 获取DOM元素实例</h2>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>聚焦</button>
        </>
    )
}

export default Comp