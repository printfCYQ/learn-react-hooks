import React, { useRef } from 'react';

const Child: React.FC = () => {
    return (
        <>
            <h2>子组件</h2>
        </>
    )
}

const Comp: React.FC = () => {
    const childRef = useRef()
    return (
        <>
            <h2>05. useRef 不能直接获取到子组件的实例 </h2>
            {/* 不能将类型“{ ref: MutableRefObject<undefined>; }”分配给类型“IntrinsicAttributes”。类型“IntrinsicAttributes”上不存在属性“ref”。 */}
            {/* Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? */}
            {/* <Child ref={childRef} /> */}
        </>
    )
}

export default Comp