import React, {FC} from 'react';
import cls from './Status.module.scss'
import Icon from "../Icon/Icon";


type StatusProps = {
    title: string,
    status: string
}

const Status: FC<StatusProps> = (
    {
        title,
        status
    }
) => {
    return (
        <div className={cls.box}>
            <div className={cls.left}>

                <p className={cls.title}>
                    {title}
                </p>
                <p className={[cls.status, status === 'success' ? cls.success : cls.error].join(' ')}>
                    {status}
                </p>

            </div>

            <Icon name={'circle-gradient'} size={38} className={cls.icon}/>
        </div>
    );
};

export default Status;