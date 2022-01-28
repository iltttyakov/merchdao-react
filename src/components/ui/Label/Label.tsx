import React, {FC} from 'react';
import cls from './Label.module.scss'


type LabelProps = {
    className?: string,
    htmlFor?: string,
}

const Label: FC<LabelProps> = ({htmlFor, children, className = ''}) => {
    return (
        <label className={[cls.box, className].join(' ')} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export default Label;