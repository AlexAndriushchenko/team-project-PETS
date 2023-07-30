import { styled } from "styled-components";
import { CiLogout } from 'react-icons/ci';

export const WrapperContent = styled.div`
width: 280px;
height: 302px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
`;

export const Title = styled.h2`
color: #111;
text-align: center;
font-family: Manrope;
font-size: 24px;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;
`;


export const ButtonCancel = styled.button`
display: flex;
width: 256px;
height: 40px;
padding: 8px 20px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;

border-radius: 40px;
border: 2px solid #54ADFF;

color: #54ADFF;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;
`;


export const ButtonYes = styled.button`
display: flex;
width: 256px;
padding: 8px 20px;
justify-content: center;
align-items: center;
gap: 8px;

border-radius: 40px;
background: #54ADFF;

color: #FEF9F9;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;
`;


export const IconYes = styled(CiLogout)`
width: 24px;
height: 24px;
flex-shrink: 0;
fill: #FEF9F9;
`;