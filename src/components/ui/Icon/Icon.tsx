import React, {FC} from 'react';
import SpriteSVG from './sprite.svg';

type IconsProps = {
    name: string,
    size: number,
    className?: string,
}

const Icon: FC<IconsProps> = ({name, size, className = ''}) => {
    return (
        <svg className={className} width={size} height={size}>
            <use xlinkHref={`${SpriteSVG}#${name}`}/>
        </svg>
    )
}

export default Icon;