import { FC, PropsWithChildren, useCallback, useState, useTransition } from 'react'

// 父组件
const Comp: FC = () => {
    const [activeTab, setActiveTab] = useState('home')

    // useTransition
    // 没有参数
    // 第一个值：布尔值，是否处于低优先级更新状态
    // 第二个值：函数，调用此函数，可以把状态的更新标记为低优先级的，不阻塞 UI 对用户操作的响应；
    const [isPending, startTransition] = useTransition()
    // 注意事项⚠️
    // 1. 传递给 startTransition 的函数必须是同步的。React 会立即执行此函数，并将在其执行期间发生的所有状态更新标记为 transition。
    //    如果在其执行期间，尝试稍后执行状态更新（例如在一个定时器中执行状态更新），这些状态更新不会被标记为 transition；
    // 2. 标记为 transition 的状态更新将被其他状态更新打断。例如在 transition 中更新图表组件，并在图表组件仍在重新渲染时继续在输入框中输入，
    //    React 将首先处理输入框的更新，之后再重新启动对图表组件的渲染工作；
    // 3. transition 更新不能用于控制文本输入。

    const onBtnClick = (name: string) => {
        // 把某次更新，标记为低优先级的，从而防止页面卡顿的情况
        startTransition(() => {
            setActiveTab(name)
        })

        // 组件的更新 会阻塞用户操作
        // setActiveTab(name)
    }

    // 渲染标签页的函数
    const renderTabs = useCallback(() => {
        if (isPending) return <h3>Loading...</h3>

        switch (activeTab) {
            case 'home':
                return <HomeTab />
            case 'movie':
                return <MovieTab />
            case 'about':
                return <AboutTab />
        }
    }, [activeTab, isPending])

    const tabs = ['home', 'movie', 'about']

    return (
        <div style={{ height: 500 }}>
            <h2>01. useTransition 使用方式</h2>
            {tabs.map((tab) => (
                <TabButton key={tab} isActive={activeTab === tab} onClick={() => onBtnClick(tab)}>
                    {tab}
                </TabButton>
            ))}
            <hr />
            {renderTabs()}
        </div>
    )
}

const TabButton: FC<PropsWithChildren & { onClick: () => void; isActive: boolean }> = (props) => {
    return (
        <button className={['btn', props.isActive ? 'active' : ''].join(' ')} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

const HomeTab: FC = () => {
    return <>HomeTab</>
}

// 模拟一个渲染耗时的组件
const MovieTab: FC = () => {
    const items = Array(100000)
        .fill('MovieTab')
        .map((item, i) => <p key={i}>{item}</p>)

    return items
}

const AboutTab: FC = () => {
    return <>AboutTab</>
}


export default Comp