import styled from 'styled-components'
import { headerInfo } from '@data/about'


const GridHeader = () => {
    
    return (
        <StyledHeader>
            <StyledTitle>
                <StyledName>{headerInfo.name}</StyledName>
                <StyledJob>{headerInfo.job}</StyledJob>
            </StyledTitle>
            <StyledEmail>
                Email: {headerInfo.email} <br />
                {/* Github: {headerInfo.github} */}
            </StyledEmail>
            <div>
                {headerInfo.firstSentences &&
                headerInfo.firstSentences.map((stc, idx) => (
                     <IntroLines key={idx}>
                         {stc}
                    </IntroLines>
                ))}
            </div>
        </StyledHeader> 
    )
}

export default GridHeader

const IntroLines = styled.span`
display: block;
margin: var(--md) 0;
font-weight: 500;
@media (min-width: ${({theme}) => theme.device.sm}) {
    font-size: 1.2rem;
}
`

const StyledEmail = styled.span`
font-size: 1.1rem;
font-weight: 400;
margin:6px 0;
letter-spacing: initial;
`
const StyledJob = styled.span`
font-size: var(--3xl);
margin-left: var(--md);
padding-top: var(--md);
font-weight: 600;
`

const StyledTitle = styled.div`
display: flex; 
align-self: flex-start;
justify-self: flex-start;
`
const StyledHeader = styled.section`
width:100%;display:grid;
`
const StyledName = styled.h1`
  border-top: none;
  font-size: var(--9xl);
  font-weight: 900;
  margin:0 auto 0 0;
  color:var(--theme1-color);
`