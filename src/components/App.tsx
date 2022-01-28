import React from 'react';
import {Route, Routes} from "react-router";

import '../styles/normalize.scss';
import '../styles/general.scss';
import 'react-alice-carousel/lib/alice-carousel.css';


import {
    HOME_PAGE_ROUTE,
    COLLECTION_PAGE_ROUTE,
    COLLECTIONS_PAGE_ROUTE,
    NFT_CATALOG_PAGE_ROUTE,
    NFT_PAGE_ROUTE, CONNECTION_WALLET_PAGE_ROUTE
} from "./routes";

import HomePage from "./pages/HomePage";
import NftCatalogPage from "./pages/NftCatalogPage";
import NftPage from "./pages/NftPage";
import CollectionPage from "./pages/CollectionPage";
import CollectionCatalogPage from "./pages/CollectionCatalogPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";


const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={HOME_PAGE_ROUTE} element={<HomePage/>}/>
                <Route path={COLLECTIONS_PAGE_ROUTE} element={<CollectionCatalogPage/>}/>
                <Route path={COLLECTION_PAGE_ROUTE} element={<CollectionPage/>}/>
                <Route path={NFT_CATALOG_PAGE_ROUTE} element={<NftCatalogPage/>}/>
                <Route path={NFT_PAGE_ROUTE} element={<NftPage/>}/>
                <Route path={CONNECTION_WALLET_PAGE_ROUTE} element={<ConnectWalletPage/>}/>
            </Routes>
        </>
    );
};

export default App;