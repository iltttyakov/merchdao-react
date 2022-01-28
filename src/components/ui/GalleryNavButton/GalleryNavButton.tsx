import React, {FC} from 'react';
import cls from './GalleryNavButton.module.scss'
import Icon from "../Icon/Icon";


type GalleryNavButtonProps = {
    onClick: () => void,
    className?: string
}

const GalleryNavButton: FC<GalleryNavButtonProps> = ({onClick, className = ''}) => {
    return (
        <button className={[cls.box, className].join(' ')} onClick={onClick}>
            <Icon className={cls.arrow} name={'small-arrow'} size={24}/>
        </button>
    );
};

export default GalleryNavButton;