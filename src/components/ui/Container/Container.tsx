import React, {FC} from 'react';
import cls from './Container.module.scss'


type ContainerProps = {
    className?: string
}

const Container: FC<ContainerProps> = ({children, className = ''}) => {
    return (
        <div className={[cls.box, className].join(' ')}>
            {children}
        </div>
    );
};

export default Container;