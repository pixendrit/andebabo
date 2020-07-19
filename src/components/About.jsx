import React from "react";
import Button from "components/_ui/Button";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

const AboutContainer = styled("div")`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 8em 1fr 8em;
    grid-gap: 3em;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr 3fr 1fr;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 7em 1fr;
        grid-template-rows: 3em 1fr;
        grid-gap: 2em;
    }
`

const AboutLinkContainer = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 2;
    }
`

const AboutLink = styled("a")`
    margin-bottom: 1.5em;
    font-weight: 600;
    line-height: 1.9;
    text-decoration: none;
    color: currentColor;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        opacity: 0;
        transition: all 400ms ease-in-out;
    }

    &:hover {
        span {
            transform: translateX(0px);
            opacity: 1;
            transition: all 150ms ease-in-out;
        }
    }
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    max-width: 480px;


    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 2;
    }
`

const AboutActions = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;


    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding: 0;
        grid-column: 1 / -1;
        grid-row: 1;
    }
`


const About = ({ bio, socialLinks }) => (
    <AboutContainer>
        <AboutLinkContainer>
            {socialLinks.map((social, i) => (
                <AboutLink
                    key={i}
                    href={social.about_link[0].spans[0].data.url}
                    target="_blank" rel="noopener noreferrer">
                    {social.about_link[0].text}
                    <span>&#8594;</span>
                </AboutLink>
            ))}
        </AboutLinkContainer>
        <AboutBio>
            {RichText.render(bio)}
            <a href="tel:+491785456788"> Ruf uns um ... an 07185-456788</a>
        </AboutBio>
        <AboutActions>
            <a href="mailto:andegmbh@hotmail.com" target="_blank" rel="noopener noreferrer">
                <Button className="Button--secondary">
                Schreiben Sie uns eine E-Mail
                </Button>
            </a>
        </AboutActions>
        
        <iframe scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=370&height=300&hl=de&q=Telemannstra%C3%9Fe%2010%20%20M%C3%BCnster+(Ande%20Gmbh)&t=&z=12&ie=UTF8&iwloc=B&output=embed" width="370" height="300" frameborder="0"></iframe> <a href='https://add-map.com/'>Ort </a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=85313abc112b9202201bfff20a400f11bd5cb743'></script>
    </AboutContainer>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};