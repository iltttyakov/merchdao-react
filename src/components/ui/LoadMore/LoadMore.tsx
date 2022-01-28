import React, {FC} from 'react';
import cls from './LoadMore.module.scss'
import Icon from "../Icon/Icon";


type LoadMoreProps = {
    onClick: () => void
}

const LoadMore: FC<LoadMoreProps> = ({onClick}) => {
    return (
        <button className={cls.box} onClick={onClick}>
            <Icon name={'loading'} size={16} className={cls.icon}/>
            <span className={cls.text}>
                Load more
            </span>
        </button>
    );
};

export default LoadMore;