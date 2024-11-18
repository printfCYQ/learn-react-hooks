import React, { useCallback, useState } from 'react';

const set = new Set()

const Comp: React.FC = () => {

    const [keyword, setKeyword] = useState('')

    // 每次输入框变化都会触发 生成一个新的函数 set内的内容越来越多
    // const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setKeyword(e.currentTarget.value);
    // };

    // 使用useCallback缓存 只会生成一个函数
    // useCallback的第一个参数是一个函数，返回值是缓存的函数，第二个参数是依赖项数组
    // 1. 不传，每次都会生成新的函数
    // 2. 传入一个空数组，只有第一次会生成新的函数
    // 3. 传入一个指定的依赖项，只有依赖改变时才会生成新的函数
    const changeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value);
    }, []);
    set.add(changeKeyword)
    console.log(set);

    return (
        <>
            <h2>01. useCallback 缓存函数</h2>
            <input type="text" value={keyword} onChange={changeKeyword} />
            <p>keyword: {keyword}</p>
        </>
    )
}

export default Comp