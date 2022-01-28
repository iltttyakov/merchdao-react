import React, {FC} from 'react';
import cls from './Tag.module.scss'


type TagProps = {}

const Tag: FC<TagProps> = ({children}) => {
    return (
        <div className={cls.box}>
            {children}
        </div>
    );
};

export default Tag;