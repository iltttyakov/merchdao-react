import React, {FC} from 'react';
import MainLayout from "../containers/MainLayout";
import NftSubHeader from "../containers/NftSubHeader";
import NftExample from "../containers/NftExample";

const NftPage: FC = () => {
    return (
        <MainLayout>

            <NftSubHeader/>
            <NftExample/>

        </MainLayout>
    );
};

export default NftPage;