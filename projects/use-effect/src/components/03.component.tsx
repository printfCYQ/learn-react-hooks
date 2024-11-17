import React, { useEffect, useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    const add = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        // 会死循环
        // setCount(count + 1)

        // 写上[] 则不会死循环
    }, [])


    useEffect(() => {
        console.log('03-useEffect-count', document.querySelector('#count-03')?.innerHTML);
    }, [count])
    useEffect(() => {
        console.log('03-useEffect-flag', document.querySelector('#flag-03')?.innerHTML);
    }, [flag])

    return (
        <>
            <h2>03. useEffect 不要改变依赖项。多个副作用分开写，不要写在一起</h2>
            <h2 id='count-03'>count 的值：{count}</h2>
            <h2 id='flag-03'>flag 的值：{String(flag)}</h2>
            <button onClick={() => setFlag(flag => !flag)}>flag</button>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Comp