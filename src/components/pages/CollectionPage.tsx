import React, {FC} from 'react';
import MainLayout from "../containers/MainLayout";
import CollectionHeaderExample from "../containers/CollectionHeaderExample";
import CollectionNftCatalog from "../containers/CollectionNftCatalog";

const CollectionPage: FC = () => {
    return (
        <MainLayout>

            <CollectionHeaderExample/>
            <CollectionNftCatalog/>

        </MainLayout>
    );
};

export default CollectionPage;