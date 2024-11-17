import React, { useEffect, useState } from 'react';

const Comp: React.FC = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    const add = () => {
        setCount(count + 1)
    }

    // 1. 不写 deps 的时候，在组件每次渲染完成之后，都会重新直接useEffect的回调函数
    // 2. 写空数组的时候，在组件初始化时，会执行useEffect的回调函数，但后续不会再次执行
    // 3. 指定依赖项的时候，只有依赖项发生变化的时候，才会重新执行useEffect的回调函数
    useEffect(() => {
        console.log('02-useEffect', document.querySelector('#count-02')?.innerHTML);
    })
    // }, [])
    // }, [count])



    return (
        <>
            <h2>02. useEffect 的 依赖数组deps</h2>
            <h2 id='count-02'>count 的值：{count}</h2>
            <h2>flag 的值：{String(flag)}</h2>
            <button onClick={() => setFlag(flag => !flag)}>flag</button>
            <button onClick={add}>+1</button>
        </>
    )
}

export default Comp