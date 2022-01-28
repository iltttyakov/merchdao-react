import React, {FC} from 'react';

import Header from "../ui/Header/Header";
import Logo from "../ui/Logo/Logo";
import ConnectButton from "../ui/ConnectButton/ConnectButton";
import MainMenu from "./MainMenu";


const MainHeader: FC = () => {
    return (
        <Header
            logo={<Logo/>}
            nav={<MainMenu/>}
            actions={<ConnectButton/>}
        />
    );
};

export default MainHeader;