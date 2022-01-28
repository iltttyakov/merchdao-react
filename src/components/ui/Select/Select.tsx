import React, {FC, useEffect, useRef, useState} from 'react';
import cls from './Select.module.scss'
import {useDetectClickOutside} from 'react-detect-click-outside';

import arrow from './arrow.svg'
import randomString from "../../../helpers/random-string";
import Label from "../Label/Label";


type SelectProps = {
    name: string,
    options: Array<{
        value: string,
        label: string,
    }>,
    className?: string,
    label?: string,
}

const Select: FC<SelectProps> = (
    {
        name,
        options,
        label,
        className = '',
    }
) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectOptionIndex, setSelectOptionIndex] = useState(0)

    const clsArr = [cls.box, className]


    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }

    const closeDropDown = () => {
        setIsOpen(false)
    }
    const ref = useDetectClickOutside({onTriggered: closeDropDown})

    const selectOption = (index: number) => {
        setSelectOptionIndex(index)
        closeDropDown()
    }


    return (
        <div className={clsArr.join(' ')} ref={ref}>

            {
                label
                    ? <Label className={cls.label}>
                        {label}
                    </Label>
                    : null
            }

            <div className={cls.input} onClick={toggleDropDown}>
                <span className={cls.inputText}>
                    {options[selectOptionIndex]['label']}
                </span>
                <div className={[cls.openIndicator, isOpen ? cls.open : ''].join(' ')}>
                    <img className={cls.icon} src={arrow} width={15} height={15}/>
                </div>
            </div>

            <div className={[cls.dropDown, isOpen ? cls.open : ''].join(' ')}>
                <ul className={cls.list}>

                    {
                        Object.keys(options).map((keyName, i) => {
                            const option = options[i]
                            const id = name + randomString(5)

                            return (
                                <li className={cls.item} key={i}>
                                    <input
                                        className={cls.radio}
                                        type={'radio'}
                                        name={name}
                                        id={id}
                                        value={option['value']}
                                        checked={i === selectOptionIndex}
                                        onChange={() => selectOption(i)}
                                    />
                                    <label className={cls.option} htmlFor={id}>
                                        {option['label']}
                                    </label>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

        </div>
    );
};

export default Select;