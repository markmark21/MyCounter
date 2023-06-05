import React from "react";

export type ButtonPropsType = {
    callback: () => void;
    title: string
    isDisabled: boolean
}

export const SuperButton: React.FC<ButtonPropsType> = (props) => {
    const {callback, isDisabled, title} = props
    return (
        <div>
            <button onClick={callback} disabled={isDisabled} title={title}>{title}</button>
        </div>
    );
};

