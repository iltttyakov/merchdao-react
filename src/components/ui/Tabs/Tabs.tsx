import React, {FC, useState} from 'react';
import cls from './Tabs.module.scss'
import randomString from "../../../helpers/random-string";


type TabsProps = {
    name: string,
    options: Array<any>,
    className?: string,
}

const Tabs: FC<TabsProps> = (
    {
        name,
        options,
        className = ''
    }
) => {
    const [selectOptionIndex, setSelectOptionIndex] = useState(0)

    return (
        <div className={[cls.box, className].join(' ')}>
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
                                    onChange={() => setSelectOptionIndex(i)}
                                />
                                <label className={cls.label} htmlFor={id}>
                                    {option['label']}
                                </label>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default Tabs;