import React, {FC} from 'react';
import ConnectWalletSubHeader from "../containers/ConnectWalletSubHeader";
import ConnectWallet from "../sections/ConnectWallet/ConnectWallet";
import Layout from "../ui/Layout/Layout";
import MainHeader from "../containers/MainHeader";


const ConnectWalletPage: FC = () => {
    return (
        <Layout header={<MainHeader/>} footer={null}>

            <ConnectWalletSubHeader/>
            <ConnectWallet/>

        </Layout>
    );
};

export default ConnectWalletPage;