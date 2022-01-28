import React, {FC} from 'react';
import cls from './GalleryDot.module.scss';


type GalleryDotProps = {
    active: boolean
}

const GalleryDot: FC<GalleryDotProps> = ({active}) => {
    return (
        <div className={cls.box}>
            <div className={[cls.dot, active ? cls.active : ''].join(' ')}/>
        </div>
    );
};

export default GalleryDot;