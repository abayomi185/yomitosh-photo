import React, { useState, useContext } from 'react';
import Layout from "./Layout";
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../Styles/GlobalStyles'
import { AppState } from "../context/AppState";

export default function MyApp({ Component, pageProps }) {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <ThemeProvider theme={{ mode: 'light' }}>
            <GlobalStyle />
            <AppState.Provider
                value={{ navMenu: [openMenu, setOpenMenu], otherValue: "experimental"}}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppState.Provider>
        </ThemeProvider>
    )

}