import React, {FC} from 'react';
import cls from './Subscribe.module.scss'
import Icon from "../Icon/Icon";

import bg from './bg.png'

type SubscribeProps = {}

const Subscribe: FC<SubscribeProps> = () => {
    return (
        <form className={cls.box} style={{backgroundImage: `url(${bg})`}}>
            <div className={cls.field}>
                <input className={cls.input} type={'email'} name={'email'} placeholder={'Subscribe newsettler'}/>
                <button className={cls.button}>
                    <Icon className={cls.icon} name={'arrow-subscribe'} size={14}/>
                </button>
            </div>
        </form>
    );
};

export default Subscribe;