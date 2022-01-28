import React, {FC} from 'react';
import cls from './SizeTable.module.scss'

import illustration from './illustration.jpg'

type SizeTableProps = {}

const SizeTable: FC<SizeTableProps> = () => {
    return (
        <div className={cls.box}>
            <p className={cls.title}>
                Detect your size
            </p>
            <img className={cls.illustration} src={illustration} width={728} height={364} alt={'SizeTable'}/>
        </div>
    );
};

export default SizeTable;