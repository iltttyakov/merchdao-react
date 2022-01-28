import React, {FC, useState} from 'react';
import cls from './RadioList.module.scss'
import randomString from "../../../helpers/random-string";


type RadioListProps = {
    name: string,
    items: Array<{
        value: string,
        label: string,
    }>
}

const RadioList: FC<RadioListProps> = ({items, name}) => {
    const [selectOptionIndex, setSelectOptionIndex] = useState(0)

    return (
        <div className={cls.box}>
            <ul className={cls.list}>

                {
                    Object.keys(items).map((keyName, i) => {
                        const item = items[i]
                        const id = name + randomString(5)

                        return (
                            <li className={cls.item}>
                                <input
                                    className={cls.input}
                                    type={'radio'}
                                    name={name}
                                    value={item['value']}
                                    id={id}
                                    checked={selectOptionIndex === i}
                                    onChange={() => setSelectOptionIndex(i)}
                                />
                                <label
                                    className={cls.label}
                                    htmlFor={id}
                                >
                                    <span>
                                        {item['label']}
                                    </span>
                                </label>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default RadioList;