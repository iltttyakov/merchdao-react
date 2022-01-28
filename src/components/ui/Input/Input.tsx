import React, {FC} from 'react';
import cls from './Input.module.scss'


type InputProps = {
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    label?: string,
    type?: string,
    placeholder?: string,
    className?: string,
}

const Input: FC<InputProps> = (
    {
        name,
        value,
        onChange,
        label,
        type = 'text',
        placeholder,
        className = '',
    }
) => {
    return (
        <label className={[cls.box, className].join(' ')}>

            {
                label
                    ? <p className={cls.label}>
                        {label}
                    </p>
                    : null
            }
            <input
                className={cls.input}
                type={type}
                name={name}
                value={value}
                onChange={(event) => {
                    onChange(event)
                }}
                placeholder={placeholder}
            />

        </label>

    );
};

export default Input;