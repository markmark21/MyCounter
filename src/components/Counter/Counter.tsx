import React, {useState} from "react";
import {SuperButton} from "../SuperButton/SuperButton";

const Counter = () => {
    const [likes, setLikes] = useState<number>(0)
    return (
        <div>
            <div>
                {likes}
            </div>
            <div>
                <SuperButton callback={() => {setLikes(likes + 1)}} title={'Increment'} isDisabled={likes >= 5}/>
                <SuperButton callback={() => {setLikes(0)}} title={'Reset'} isDisabled={likes <= 0}/>
            </div>

        </div>
    );
};

export default Counter;