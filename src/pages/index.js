// @flow

import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import gif from '../../static/under_construction_graphic.gif';

const Img = styled.img`
    display: block;
    width: 100vw;
    height: 100vh;
`;

const Index = () => (
    <Layout>
        <a href="https://get.adobe.com/flashplayer/">
            <Img alt="under construction" src={gif} />
        </a>
    </Layout>
);

export default Index;
