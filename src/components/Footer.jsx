import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import spooch from "images/oscar-icon.png"


const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const FooterSpooch = styled("img")`
    max-width: 33px;
    margin-top: 0.25em;
`

const Footer = () => (
    <FooterContainer>
                    <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Telemannstra%C3%9Fe%2010%20%20M%C3%BCnster+(Ande%20Gmbh)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="520" height="400" frameborder="0"></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=85313abc112b9202201bfff20a400f11bd5cb743'></script>

        <Link to="/">
            <Logo />
        </Link>
        <FooterAuthor href="https://www.pixendrit.com">
            © 2020 — Designed & developed by pixendrit
            <FooterSpooch className="FooterSpooch" src={spooch} />
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
