import React, {FC} from 'react';
import MainLayout from "../containers/MainLayout";
import CollectionCatalogTrending from "../containers/CollectionCatalogTrending";
import CollectionsSmallSlider from "../containers/CollectionsSmallSlider";

const CollectionCatalogPage: FC = () => {
    return (
        <MainLayout>

            <CollectionCatalogTrending/>
            <CollectionsSmallSlider/>

        </MainLayout>
    );
};

export default CollectionCatalogPage;