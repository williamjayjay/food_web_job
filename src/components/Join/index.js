import React from 'react'
import {ContainerMaster, Container,Widget,Nextzin,Button, Input,Header } from './styles';
import imgJoin from "../../imgs/bloco_final_image.svg";
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu'

export default function Join() {
  return (
    <ContainerMaster back={imgJoin} lado={'right'} >
      <Container>

       <Header>
            <Link  id="voltar" to ="/">
              <p  >Voltar</p>
            </Link>
            <div id={'uva'} >
            </div>
            
          </Header>
      <Widget>
      <p>Join our membership to get special offer</p>
      <Nextzin>
        <Input placeholder ="Enter your email address" />
        <Button>
          Join
        </Button>
      </Nextzin>
      </Widget>
      </Container>
      <MobileMenu/>

    </ContainerMaster>
  )
}

