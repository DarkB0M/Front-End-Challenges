import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 25%;
  padding: 10px;
  width:500px;
  height: 400px;
`;

export const Global = createGlobalStyle`
margin:0;
height:100%;
width:100%;
padding:0%;
scroll-behavior:smooth;
::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
}
`;
// search div

export const SearchDiv = styled.div`
margin-left:30px;
margin-top:30px;
display:flex;
flex-direction:row;

`
export const BtnDiv = styled.div`
    position:absolute;
    right:0%;

`
export const ButtonModal = styled.button`
width:80px;
border:3px solid black;
`








export const Explain = styled.h4`
font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
margin-left:30px;
margin-top:30px;

`

export const CenterText = styled.h2`
font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
margin-left:30px;
margin-top:30px
`
