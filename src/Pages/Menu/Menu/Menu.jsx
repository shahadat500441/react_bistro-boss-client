import React from 'react';
import { Helmet } from '@vuer-ai/react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/menu-bg.png"
import SectionTitle from './../../../components/SectionTitle/SectionTitle';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle
            subHeading="---Don't miss---"
            heading="TODAY'S OFFER"
            ></SectionTitle>
            <p>menu page</p>
        </div>
    );
};

export default Menu;