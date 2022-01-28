import React, {FC} from 'react';
import cls from './Button.module.scss'


type ButtonProps = {
    type?: string,
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
}

const Button: FC<ButtonProps> = (
    {
        type = 'fill',
        className = '',
        onClick = () => {
        },
        disabled = false,
        children
    }
) => {
    const clsArr = [cls.box, className, disabled ? cls.disabled : '']

    switch (type) {
        case 'fill':
            clsArr.push(cls.fill)
            break;
        case 'stroke':
            clsArr.push(cls.stroke)
            break;
    }

    return (
        <button
            className={clsArr.join(' ')}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={cls.text}>
                {children}
            </span>
        </button>
    );
};

export default Button;