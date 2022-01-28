import React, {FC} from 'react';
import cls from './IconButton.module.scss'
import Icon from "../Icon/Icon";


type IconButtonProps = {
    icon: string,
    onClick: () => void
}

const IconButton: FC<IconButtonProps> = ({icon, onClick, children}) => {
    return (
        <button className={cls.box} onClick={onClick}>
            <Icon className={cls.arrow} name={icon} size={16}/>
            <span className={cls.text}>
                {children}
            </span>
        </button>
    );
};

export default IconButton;