import { useCountDown } from '@/hooks';
import React from 'react';



const Comp: React.FC = () => {
    const { count, disabled } = useCountDown(10)

    return (
        <>
            <h2>08. useEffect 封装倒计时 hooks</h2>
            <button
                disabled={disabled}
                onClick={() => {
                    console.log('已同意');
                }}>
                {disabled ? `请阅读${count}秒` : '点击同意协议'}
            </button>
        </>
    )
}

export default Comp