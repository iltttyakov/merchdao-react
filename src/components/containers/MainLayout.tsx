import React, {FC} from 'react';
import Layout from "../ui/Layout/Layout";
import MainHeader from "./MainHeader";
import Footer from "../ui/Footer/Footer";


type MainLayoutProps = {}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <Layout header={<MainHeader/>} footer={<Footer/>}>
            {children}
        </Layout>
    );
};

export default MainLayout;