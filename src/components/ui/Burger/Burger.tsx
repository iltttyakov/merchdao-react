import React, {FC} from 'react';
import cls from './Burger.module.scss'
import Icon from "../Icon/Icon";


type BurgerProps = {
    open: boolean,
    onClick: () => void
}

const Burger: FC<BurgerProps> = ({open, onClick}) => {
    return (
        <button className={cls.box} onClick={onClick}>
            {
                open
                    ? <Icon name={'close'} size={32} className={cls.icon}/>
                    : <Icon name={'burger'} size={32} className={cls.icon}/>
            }
        </button>
    );
};

export default Burger;