import React  from 'react';
import { ContainerMaster, Container,Spacer,Footer } from './styles';

import imgInitial from "../../imgs/Illustration.svg";
import imgServices from "../../imgs/bloco_services.svg";
import imgFinal from "../../imgs/bloco_final_image.svg";
import Main from '../../components/Main'
import End from '../../components/End'
// import PageInitial from "../PageInitial"

export default function Page() {
  
  return (
    
    <ContainerMaster>
      
    {[
            imgInitial,
            imgServices,
    ].map(modelName =>  (
     
      <Container 
        key={modelName} 
        back={modelName} 
        lado={(modelName == imgInitial ? 'right' : 'left')} >
        
        <div>{modelName == imgInitial ? <Main/> : <End/> }</div>
      </Container>
    ))}
    <Footer>
    <p id="aa">© Copyrights 2019 Stack. All Rights Reserved.</p>
    <p>Privacy Policy</p>
    <p>Terms and Conditions</p>

    </Footer>
    <Spacer/>
  
    </ContainerMaster>
  )
}

