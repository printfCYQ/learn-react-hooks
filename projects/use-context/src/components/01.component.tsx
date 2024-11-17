import React, { useContext, useState } from 'react';

type AppContextType = { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }

const AppContext = React.createContext<AppContextType>({} as AppContextType)

export const Comp: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>01.useContext  基本用法</h2>
            <div style={{ padding: 30, backgroundColor: '#0f4759' }}>
                <p>父组件-count值是：{count}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
                <AppContext.Provider value={{ count, setCount }}>
                    <Child />
                </AppContext.Provider>
            </div>
        </div>

    )
}

const Child: React.FC = () => {
    return (
        <div style={{ padding: 30, backgroundColor: 'lightgreen' }}>
            <GrandSon />
        </div>
    )
}

const GrandSon: React.FC = () => {

    const ctx = useContext(AppContext)
    const add = () => ctx.setCount((prev) => prev + 1)

    return (
        <>
            <div style={{ padding: 30, backgroundColor: 'lightsalmon' }}>
                <p>孙组件-count 的值是：{ctx.count}</p>
                <button onClick={add}>+1</button>
                <button onClick={() => ctx.setCount(0)}>重置</button>
            </div>
        </>
    )
}

export default Comp