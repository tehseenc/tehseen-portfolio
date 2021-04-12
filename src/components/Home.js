import React from 'react'
import styled from 'styled-components/macro'
import { landingData } from '../data/LandingData'
import Emoji from '../components/Emoji';

const WrapperMax = styled.section`
    background: #F8F8F8;
    width: 100%;
    height: 100vh;
`;

const WrapperPage = styled.section`
    background: none;
    position: relative;
    min-width: 50rem;
    max-width: 66.625rem;
    display: flex;
    height: fit-content;
    margin: auto;
`;

const LandingHeading = styled.a`
    color: #E98837;
    font-family: Stratos;
    font-weight: 500;
    letter-spacing: 0.15rem;
    font-size: 3.2rem;
    padding-left: 3rem;
    margin-top: 5rem;
    max-width: 40rem;
`;

const LandingContainer = styled.section`
    position: relative;
    min-width: 50rem;
    width: 66.625rem;
    height: fit-content;
`


const LandingHeadingContainer = styled.section`
    display: flex;
    min-width: 50rem;
    width: 66.625rem;
`

const LandingBlurbContainer = styled.section`
    display: flex;
    min-width: 50rem;
    width: 66.625rem;
    justify-content: flex-end;
`

const LandingBlurb = styled.p`
    color: #575340;
    font-family: Hermes;
    font-size: 1.3rem;
    padding-right: 3rem;
    margin-top: 4.58rem;
    max-width: 34.325rem;
    letter-spacing: 0.2rem;
`

const ScrollContainerVertical = styled.section`
    display:flex;
    flex-flow: column;
    justify-content: center;
`

const ScrollContainerHorizontal = styled.section`
    margin-top: 15.23rem;
    min-width: 50rem;
    width: 66.625rem;
    display:flex;
    justify-content: center;
    text-align: center;
`

const ScrollText = styled.a`
font-family: Stratos;
font-weight: 350;
font-size: 1.6rem;
letter-spacing: 0.1em;
color: black;
white-space: nowrap;
opacity: 25%;
`

const EmojiScrollDown = styled.h1`
font-size:4rem;
`

const Home = () => {
    return (
        <WrapperMax>
            <WrapperPage>
                <LandingContainer>
                    <LandingHeadingContainer>
                        {landingData.map((item, index) => (
                            <LandingHeading key='itemtitle'>
                                {item.titlep1}
                                <br />
                                {item.titlep2}
                            </LandingHeading>

                        ))}
                    </LandingHeadingContainer>
                    <LandingBlurbContainer>
                        {landingData.map((item, index) => (

                            <LandingBlurb key='itemtext'>
                                {item.text}
                            </LandingBlurb>
                        ))}
                    </LandingBlurbContainer>

                    <ScrollContainerHorizontal>
                        <ScrollContainerVertical>
                            {/* <ScrollText>
                                Selected Works
                            </ScrollText> */}
                            <EmojiScrollDown>
                                <Emoji symbol="👇" label="scroll down" />
                            </EmojiScrollDown>
                        </ScrollContainerVertical>
                    </ScrollContainerHorizontal>
                </LandingContainer>

            </WrapperPage>
        </WrapperMax>
    )
}

export default Home
