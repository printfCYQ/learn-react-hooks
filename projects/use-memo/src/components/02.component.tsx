import React from 'react';

const Comp: React.FC = () => {

  const [count, setCount] = React.useState(0)
  const [flag, setFlag] = React.useState(false)

  // 只要组件重新渲染，就会执行
  const mood = () => {
    console.log('02-mood执行了');
    return flag ? '嘻嘻' : '不嘻嘻'
  }

  // 只有依赖项发生变化的时候，才会重新执行
  // React.useMemo 第二个参数是可选的，数组
  // 1. 不传，每次都会重新执行，不建议
  // 2. 传了，只有依赖项发生变化的时候，才会重新执行
  // 3. 空数组，只有组件初始化的时候，才会执行，只执行一次
  const memoMood = React.useMemo(() => {
    console.log('02-memoMood执行了');
    return flag ? '嘻嘻' : '不嘻嘻'
  }, [flag])

  return (
    <>
      <h2>02. useMemo 语法</h2>
      <p>Count: {count}</p>
      <p>Flag: {String(flag)}</p>
      <p>Mood: {mood()}</p>
      <p>MemoMood: {memoMood}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setFlag(flag => !flag)}>toggle flag</button>
    </>
  )
}

export default Comp