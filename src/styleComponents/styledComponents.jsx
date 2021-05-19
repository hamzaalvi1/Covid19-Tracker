import styled from 'styled-components';

export const FlexWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 20px 0;

`


export const MainTitle = styled.h2`
font-size: 30px;
font-style: italic;
color: #000000b9;


`

export const CountryDropDown = styled.select`
width: 200px;
height: 50px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 17px;
font-style: italic;
color: #000000b9;
font-family:"Lato";
font-weight: 600;
/* text-align-last:center;s */
letter-spacing: 0.4px;
padding: 0 10px;

`
export const CountryOption = styled.option`
padding: 10px 5px;
color: #000000b9;
font-family:"Lato";
font-weight: 600;
`

export const CasesCard = styled.div`
width: calc(90% / 3);
border-radius: 4px;
background: #fff;
box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
height: 180px;
padding: 20px 30px;
border-top: ${props => props.infected ? "16px solid #ff0000" : "14px solid #8cff97"};
`

export const AnotherCard = styled(CasesCard)`
border-top: 14px solid #2222ee;
`

export const CasesSubTitle = styled.h4`
color: rgba(0, 0, 0, 0.54);
font-size: 20px;
font-style: italic;
`
export const CasesNumbers = styled.h3`
font-size: 37px;
font-style: italic;
color: #000;
padding: 10px 0;
`
export const CasesPara  = styled(CasesSubTitle)`
font-size: 18px;

`

