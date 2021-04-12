import React from 'react'
import styled from 'styled-components/macro'
import { worksData } from '../data/WorksData'
import Dash from '../elements/dash.svg'

const WrapperMax = styled.section`
    background: #F8F8F8;
    width: 100%;
    height: fit-content;
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

const WorksContainer = styled.section`
    position: relative;
    min-width: 50rem;
    width: 66.625rem;
    height: fit-content;
`

const WorksDivTitle = styled.p`
    color: #E98837;
    font-family: Hermes;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    white-space: nowrap;
`

const WorksDivColumn = styled.section`
    display: flex;
    flex-flow: column;
`

const WorksDiv = styled.section`
    display:flex;
    margin-left: 3rem;
    margin-right: 3rem;
`

const WorksDivDesc = styled.p`
    color: #575340;
    font-family: Hermes;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    padding-top: 0.4rem;
    margin-left:1rem;
`

const DashStyle = styled.a`
margin-left:1rem;
padding-top: 0.2rem;
`

const DemoContainer = styled.section`
background: #C3D1E2;
width: 53.2rem;
height: 25.2rem;
margin: auto;
margin-bottom: 2rem;
margin-top: 2rem;
justify-content: center;
display: flex;
`

const SpotifyGif = styled.img`
width:32rem;
margin: auto;
`



const Works = () => {
    return (
        <WrapperMax>
            <WrapperPage>
                <WorksContainer>
                    <WorksDivColumn>
                        {worksData.map((item, index) => [
                            <WorksDivColumn>
                                <WorksDiv>
                                    <WorksDivTitle key='itemtitle'>
                                        {item.title}
                                    </WorksDivTitle>
                                    <DashStyle>
                                        <img src={Dash} alt="dash" />
                                    </DashStyle>
                                    <WorksDivDesc key='itemtitle'>
                                        {item.description}
                                    </WorksDivDesc>
                                </WorksDiv>

                                <DemoContainer>
                                    <SpotifyGif src={item.image} />
                                </DemoContainer>
                            </WorksDivColumn>
                        ])}
                    </WorksDivColumn>
                </WorksContainer>
            </WrapperPage>
        </WrapperMax>
    )
}

export default Works
