import React, { useState } from 'react';

const Count: React.FC = () => {
    const [, forceUpdate] = useState({})

    console.log('07.render');

    const onRefresh = () => {
        forceUpdate({})
    }

    return (
        <>
            <h2>07.模拟组件强制刷新</h2>
            <button onClick={onRefresh}>刷新 {new Date().getTime()}</button>
        </>
    )
}

export default Count