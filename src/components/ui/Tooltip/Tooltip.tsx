import React, {FC} from 'react';
import cls from './Tooltip.module.scss'


type TooltipProps = {
    text: string,
    className?: string
}

const Tooltip: FC<TooltipProps> = ({text, children, className = ''}) => {
    return (
        <div className={[cls.box, className].join(' ')}>

            <div className={cls.hint}>
                <span className={cls.hintText}>
                    {text}
                </span>
                <svg className={cls.hintTriangle} width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.17157 3.17157L0 0H12L8.82843 3.17157C7.26633 4.73367 4.73367 4.73367 3.17157 3.17157Z"
                          fill="#141416"/>
                </svg>
            </div>

            {children}
        </div>
    );
};

export default Tooltip;