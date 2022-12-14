import React from 'react'
import { BoxDiv, Button, Buttontext, Description, LinkText, TagsDiv, TagsText, TitleAndLinkDiv } from './box.styles'
import { GrClose } from 'react-icons/gr'
interface BoxProps{
id?:string,
title:string,
link:string,
description:string,
tags:string[],
onClick:any;
}

type FC = React.FC<BoxProps>
//@ts-ignore
const App:FC = (props) => {
    return(
        <BoxDiv>
        <TitleAndLinkDiv>
        <LinkText href={props.link}>{props.title}</LinkText>
        {/* Botão de remover */}
        <Button onClick={props.onClick}>
            <GrClose size={16} fill="#000000" style={{marginRight:2}} />
               <Buttontext>Remove</Buttontext>
            </Button>
        </TitleAndLinkDiv>


        <Description>{props.description}</Description>
        <TagsDiv>
            <TagsText>{props.tags}</TagsText>
        </TagsDiv>

        </BoxDiv>
    )
}

export default App