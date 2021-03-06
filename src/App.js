import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles/common.scss";

// components
import Navigation from "./components/global/Navigation";
import ScrollTop from "./components/global/ScrollTop";

import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import Footer from "./components/global/Footer";
import PageTransition from "./components/global/PageTransition";

const AppWrapper = styled.div`
    width: 100%;
    position: absolute;
    /* height: 20000px; */
    background: #fafafa;
`;

const MouseLoc = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    color: red;
`;

export const locState = atom({
    key: "scrollState",
    default: [],
});

function App() {
    const [mouseLoc, setMouseLoc] = useState({
        x: 0,
        y: 0,
    });
    const setLocState = useSetRecoilState(locState);
    const loc = useRecoilValue(locState);

    const onScroll = () => {
        setLocState(Math.floor(window.scrollY));
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    const getLoc = (e) => {
        setMouseLoc({
            x: e.pageX,
            y: e.pageY,
        });
    };

    return (
        <AppWrapper onClick={getLoc} loc={loc}>
            {/* <MouseLoc style={{ top: "40px", left: "20px", zIndex: 2000 }}>
                client-x: {mouseLoc.x} px
            </MouseLoc>
            <MouseLoc style={{ top: "60px", left: "20px", zIndex: 2000 }}>
                client-y: {mouseLoc.y} px
            </MouseLoc>
            <MouseLoc style={{ top: "80px", left: "20px", zIndex: 2000 }}>
                client-y: {loc} px
            </MouseLoc> */}
            <ScrollTop />
            <Navigation />
            <PageTransition />
            <Footer />
        </AppWrapper>
    );
}

export default App;
