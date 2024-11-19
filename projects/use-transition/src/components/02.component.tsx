import { ChangeEvent, FC, useState, useTransition } from 'react'

const Comp: FC = () => {
    const [kw, setKw] = useState('')
    const [, startTransition] = useTransition()

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            setKw(e.currentTarget.value)
        })
    }

    return (
        <div style={{ height: 500 }}>
            <h2>02. useTransition 不能用于控制文本输入</h2>
            <input type="text" value={kw} onChange={onInputChange} />
            <hr />
            <SearchResult query={kw} />
        </div>
    )
}

const SearchResult: FC<{ query: string }> = (props) => {
    if (!props.query) return

    const items = Array(40000)
        .fill(props.query)
        .map((item, i) => <p key={i}>{item}</p>)

    return items
}


export default Comp