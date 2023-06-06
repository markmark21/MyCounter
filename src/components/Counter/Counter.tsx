import React, {useState} from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import s from '../SuperButton/SuperButton.module.css'
import c from './Counter.module.css'

const Counter = () => {
    const [likes, setLikes] = useState<number>(0)
    const finalClassname = `
    ${likes >= 5 ? c.red : ''}
    `
    return (
        <div className={'container'}>
            <div className={finalClassname}>
                {likes}
            </div>
            <div className={'btn'}>
                <SuperButton callback={() => {setLikes(likes + 1)}} title={'Increment'} isDisabled={likes >= 5}/>
                <SuperButton callback={() => {setLikes(0)}} title={'Reset'} isDisabled={likes <= 0}/>
            </div>

        </div>
    );
};

export default Counter;