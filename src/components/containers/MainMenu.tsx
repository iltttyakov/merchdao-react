import React, {FC} from 'react';
import Menu from "../ui/Menu/Menu";

const items = [
    {label: 'Collections', to: '/collections'},
    {label: 'NFT’s', to: '/catalog'},
]

const MainMenu: FC = () => {
    return (
        <Menu items={items}/>
    );
};

export default MainMenu;