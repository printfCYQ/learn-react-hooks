import React, { useState } from 'react';

const Comp: React.FC = () => {
    const [date] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    })

    return (
        <>
            <h2>03. 函数作为useState默认值</h2>
            <h2>{date.year}年{date.month}月{date.day}日{date.hour}时{date.minute}分{date.second}秒</h2>
        </>
    )
}

export default Comp