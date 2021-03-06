import React from "react";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";

const FooterWrapper = styled.footer`
    position: relative;
    width: 100%;
    height: 200px;
    background: black;
    margin-top: 200px;
    display: flex;
    @media (min-width: 800px) {
        height: 100px;
        margin-top: 160px;
        border-top: 1px solid #666;
        flex-direction: row;
    }
`;

const FooterContentWrapper = styled.div`
    width: 90%;
    font-size: 12px;
    p {
        color: white;
        margin: 5px 0;
    }
    a {
        text-decoration: none;
        .icon {
            margin-top: 10px;
            width: 35px;
            font-size: 30px;
            color: white;
            transition: 0.3s all ease;
            &:hover {
                color: #aaa;
            }
        }
    }
    @media (max-width: 800px) {
        margin-top: 30px;
    }
    @media (min-width: 800px) {
        a {
            .icon {
                position: absolute;
                top: 46px;
                left: 9%;
            }
        }
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContentWrapper>
                <p>©2022 Dededef_Lab</p>
                <p>Developed & Designed by Chung HeeSu ( Dededef )</p>
                <p>-</p>
                <p>Instagram</p>
                <a href="https://www.instagram.com/dededef_lab/">
                    <BsInstagram className="icon" />
                </a>
            </FooterContentWrapper>
        </FooterWrapper>
    );
};

export default Footer;
