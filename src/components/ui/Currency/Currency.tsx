import React, {FC} from 'react';
import cls from './Currency.module.scss'
import Icon from "../Icon/Icon";


type CurrencyProps = {
    name: string,
    type?: string,
    className?: string,
}

const Currency: FC<CurrencyProps> = (
    {
        name,
        type = 'stroke',
        className = ''
    }
) => {
    const clsArr = [cls.box, className]
    let iconName = name

    if (type === 'fill') {
        clsArr.push(cls.fill)
        iconName = iconName + '-white'
    }

    return (
        <div className={clsArr.join(' ')}>
            <Icon className={cls.icon} name={iconName} size={24}/>
        </div>
    );
};

export default Currency;