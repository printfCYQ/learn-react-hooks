import React, { useCallback, useEffect, useState } from 'react';

const SearchInput: React.FC<{ onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = React.memo((props: any) => {

  useEffect(() => {
    console.log('02-SearchInput组件渲染了');
  })

  return (
    <input type="text" onChange={props.onChange} />
  )
})

type ListItemType = {
  completed: boolean,
  id: number,
  title: string,
  userId: number
}
const SearchBox: React.FC<{ keyword: string }> = (props) => {
  const [list, setList] = useState<Array<ListItemType>>([])
  useEffect(() => {
    if (!props.keyword) {
      setList([])
      return
    }
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        setList(data.filter((item: ListItemType) => item.title.includes(props.keyword)))
      })
  }, [props.keyword])
  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  )
}

const Comp: React.FC = () => {

  const [keyword, setKeyword] = useState('')

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  }, [])

  return (
    <>
      <h2>02. useCallback + useMemo 避免组件重复渲染</h2>
      <SearchInput onChange={onChange}></SearchInput>
      <SearchBox keyword={keyword}></SearchBox>
    </>
  )
}

export default Comp