import React, {FC} from 'react';

import MainLayout from "../containers/MainLayout";
import CatalogSubHeader from "../containers/CatalogSubHeader";
import MainCatalog from "../containers/MainCatalog";


const NftCatalogPage: FC = () => {
    return (
        <MainLayout>

            <CatalogSubHeader/>
            <MainCatalog/>

        </MainLayout>
    );
};

export default NftCatalogPage;