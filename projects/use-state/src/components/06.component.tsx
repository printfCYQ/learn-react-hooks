import React, { useState } from 'react';

const Count: React.FC = () => {
    const [user, setUser] = useState({
        name: 'CYQ',
        age: 18,
        sex: '男'
    })

    const changeAge = () => {
        user.age = 20 // 不会更新
    }

    const changeAgeFn = () => {
        // 方法1
        // setUser({
        //     ...user,
        //     age: 20
        // })

        // 方法2
        // user.age = 22
        // setUser({ ...user })

        // 方法3
        user.age = 24
        setUser(Object.assign({}, user))
    }

    return (
        <>
            <h2>06. 更新对象数据(数组一样)</h2>
            <h2>{JSON.stringify(user)}</h2>
            <button onClick={changeAge}>直接赋值</button>
            <button onClick={changeAgeFn}>函数赋值</button>
        </>
    )
}

export default Count