import { ChangeEvent, FC, memo, useDeferredValue, useState } from 'react'

const Comp: FC = () => {
    const [kw, setKw] = useState('')
    // useDeferredValue 的作用：
    // 根据指定的 State 状态，创建出对应的延迟版本的 State 状态
    const deferredKw = useDeferredValue(kw)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKw(e.currentTarget.value)
    }

    return (
        <div style={{ height: 500, overflow: 'auto' }}>
            <h2>02. useDeferredValue 优化文本输入+样式表明值已经过时</h2>
            <input type="text" value={kw} onChange={onInputChange} />
            <hr />
            <div style={{ opacity: kw !== deferredKw ? 0.3 : 1, transition: 'opacity 0.5s ease' }}>
                <SearchResult query={deferredKw} />
            </div>
        </div>
    )
}

const SearchResult: FC<{ query: string }> = memo((props) => {
    if (!props.query) return

    const items = Array(40000)
        .fill(props.query)
        .map((item, i) => <p key={i}>{item}</p>)

    return items
})


export default Comp