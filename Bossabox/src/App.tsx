import { useState } from "react";
import Box from "./components/Box";
import {
  Container,
  Explain,
  CenterText,
  SearchDiv,
  BtnDiv,
  ButtonModal,
} from "./styles";
import Input from "./components/input";
import { BsPlusLg } from "react-icons/bs";
import Modal from "./components/Modal";
import axios from "axios";

function App() {
  const [openRequestModal, setOpenRequestModal] = useState<boolean>();
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>();
  const handleRequstModalOpen = () => setOpenRequestModal(true);
  const handleRequstModalOut = () => setOpenRequestModal(false);
  const handleRemoveModalOpen = () => setOpenRemoveModal(true);
  const handleRemoveModalOut = () => setOpenRemoveModal(false);
 type BoxProps = {
    id:string,
    title:string,
    link:string,
    description:string,
    tags:string[],
    
    }
  
  const [Content,setContent] = useState<BoxProps[]>()
  axios.get('http://localhost:3000/tools').then(
    res => res.request == "404" ? console.log(res.statusText) :  setContent(res.data)
    )
    
  return (
    <Container>
      <CenterText>VUTTR</CenterText>
      <Explain>Very Usefull Tools To Remember</Explain>
      {/* Termina OS textos */}
      <SearchDiv>
        <Input
          border="solid 2px black"
          height={19}
          width={110}
          placeholder="search"
          type={"email"}
          borderRadius={0}
        />
        {/* CheckBox */}

        {/* Button Modal */}
        <BtnDiv>
          {/* Abri o modal */}
          <ButtonModal onClick={handleRequstModalOpen}>
            <BsPlusLg style={{ marginTop: 2 }} /> Add
          </ButtonModal>
          <Modal
            outher={handleRequstModalOut}
            type="newRequst"
            isOpen={openRequestModal}
          />
        </BtnDiv>
      </SearchDiv>
      {
        typeof Content == "undefined" ? null  : Content.map((res) => {
          return(
            <Box
              key={res.id}
              title={res.title}
              link={res.link}
              description={res.description}
              tags={res.tags}
              onClick={handleRemoveModalOpen}
              
            />
            )
      }) 
      
      }

    </Container>
  );
}

export default App;
