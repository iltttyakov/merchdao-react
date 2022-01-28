import React, {FC} from 'react';
import cls from './Count.module.scss'


type CountProps = {
    className?: string
}

const Count: FC<CountProps> = ({children, className = ''}) => {
    return (
        <div className={[cls.box, className].join(' ')}>
            <p className={cls.text}>
                <span className={cls.x}>x</span>{children}
            </p>
        </div>
    );
};

export default Count;