import React, {FC} from 'react';
import SubHeader from "../ui/SubHeader/SubHeader";
import IconButton from "../ui/IconButton/IconButton";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import {HOME_PAGE_ROUTE} from "../routes";


const ConnectWalletSubHeader: FC = () => {

    return (
        <SubHeader
            left={
                <IconButton icon={'arrow'} onClick={() => console.log('back')}>
                    Back to Items
                </IconButton>
            }
            right={
                window.screen.width > 864
                    ? <Breadcrumbs items={[
                        {label: 'Explore', to: HOME_PAGE_ROUTE},
                        {label: 'Connect Wallet'},
                    ]}/>
                    : null
            }
        />
    );
};

export default ConnectWalletSubHeader;