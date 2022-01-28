import React, {FC} from 'react';
import Usp from "../sections/Usp/Usp";
import Banner from "../sections/Banner/Banner";
import ProjectsFullSlide from "../containers/CollectionsFullSlider";
import CollectionsSmallSlider from "../containers/CollectionsSmallSlider";
import MainLayout from "../containers/MainLayout";


type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
    return (
        <MainLayout>

            <Usp/>
            <ProjectsFullSlide/>
            <Banner/>
            <CollectionsSmallSlider/>

        </MainLayout>
    );
};

export default HomePage;