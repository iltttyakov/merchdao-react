import React, {FC} from 'react';
import cls from './Marker.module.scss'

import icon from './icon.svg'

type MarkerProps = {}

const Marker: FC<MarkerProps> = (
    {
        children
    }
) => {
    return (
        <div className={cls.box}>
            <p className={cls.text}>
                {children}
            </p>
            <img className={cls.icon} src={icon} width={24} height={24} alt={''}/>
        </div>
    );
};

export default Marker;