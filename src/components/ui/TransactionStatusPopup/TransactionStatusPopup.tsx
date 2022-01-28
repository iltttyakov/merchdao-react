import React, {FC} from 'react';
import cls from './TransactionStatusPopup.module.scss'
import Popup from "../Popup/Popup";

import picture from './picture.png'
import Status from "../Status/Status";
import Button from "../Button/Button";

type TransactionStatusPopupProps = {
    status: string,
    open?: boolean,
    closeFunc: () => void
}

const TransactionStatusPopup: FC<TransactionStatusPopupProps> = (
    {
        status,
        closeFunc,
        open = false,
    }
) => {
    return (
        <Popup open={open} closeFunc={closeFunc} size={'small'}>

            <div className={cls.box}>
                <p className={cls.title}>
                    Thank you
                </p>
                <img className={cls.picture} src={picture} width={316} height={189} alt={''}/>
                <div className={cls.note}>
                    <p className={cls.noteFirst}>
                        Please Check your Email
                    </p>
                    <p className={cls.noteSecond}>
                        we have sent you
                    </p>
                </div>
                
                <Status title={'Transaction'} status={'success'}/>

                <Button
                    type={'stroke'}
                    className={cls.button}
                    onClick={closeFunc}
                >
                    Close
                </Button>

            </div>

        </Popup>
    );
};

export default TransactionStatusPopup;