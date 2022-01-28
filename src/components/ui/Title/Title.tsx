import React, {FC} from 'react';
import cls from './Title.module.scss'


type TitleProps = {
    className?: string,
}

const Title: FC<TitleProps> = (
    {
        className = '',
        children
    }
) => {
    const clsArr = [cls.box, className]

    return (
        <h2 className={clsArr.join(' ')}>
            {children}
        </h2>
    );
};

export default Title;