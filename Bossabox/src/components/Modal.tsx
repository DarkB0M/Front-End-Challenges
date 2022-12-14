import React, { useState } from "react";
import Modal from "react-modal";
import {
  IntroDiv,
  NewText,
  inputDiv,
  inputTop,
  ButtonEnvi,
} from "./modal.styles";
import { BiPlusMedical } from "react-icons/bi";
import HelpModel from "./helpModel";
import Input from "./input";
import axios from "axios";
interface ModalProps {
  isOpen: boolean | undefined;
  type: "newRequst" | "excluidRequest";
  outher?:any,

}

type FC = React.FC<ModalProps>;
//@ts-ignore
const App: FC = (props) => {
  if (props.type == "newRequst") {
    const [toolName, setToolName] = useState<string>("");
    const [toolLink, setToolLink] = useState<string>("");
    const [toolDesc, setToolDesc] = useState<string>("");
    const [toolTags, setToolTags] = useState<string>("");
    

    async function BuildObject(outher:Function){

      console.log({
        title:toolName,
        link:toolLink,
        description:toolDesc,
        tags:toolTags
      })
      outher()
      
     return  axios.post('http://localhost:3000/tools',{
        title:toolName,
        link:toolLink,
        description:toolDesc,
        tags:toolTags
      }).then(e => console.log(e))
    }

    return (
      <>
        <Modal
          isOpen={props.isOpen}
          style={{
            content: {
              height: 330,
              width: 350,
              position: "absolute",
              top: "15%",
              left: "33%",
            },
          }}
        >
          <IntroDiv>
            <BiPlusMedical
              style={{ marginTop: 20, marginRight: 10 }}
              size={25}
            />
            <NewText>Add new tool</NewText>
          </IntroDiv>
          {/* @ts-ignore */}
          <inputDiv>
            <HelpModel value={toolName} onChange={e => setToolName(e.target.value)} text="Tool Name" />
            <HelpModel text="Tool Link" value={toolLink} onChange={e => setToolLink(e.target.value)} />
            <h5
              style={{
                fontFamily: "Comic Sans MS, Chalkboard SE",
                marginBottom: 0,
              }}
            >
              Tool Description
            </h5>
            <Input
              type={"text"}
              border={"2px solid black"}
              height={40}
              width={300}
              placeholder={""}
              borderRadius={0}
              marginBottom={0}
              value={toolDesc}
              onChange={(e) => setToolDesc(e.target.value)}
            />
            <h5
              style={{
                fontFamily: "Comic Sans MS, Chalkboard SE",
                marginBottom: 0,
                marginTop: 50,
              }}
            >
              Tags
            </h5>
            <Input
              type={"text"}
              border={"2px solid black"}
              height={18}
              width={300}
              placeholder={"TAGS"}
              borderRadius={0}
              marginBottom={100}
              value={toolTags}
              onChange={e => setToolTags(e.target.value)}
            />
            <ButtonEnvi onClick={() => {
              BuildObject(props.outher)
            }}>ADD Tool</ButtonEnvi>

            {/* @ts-ignore */}
          </inputDiv>
        </Modal>
      </>
    );
  }

  if(props.type == 'excluidRequest'){

  }

};

export default App;
