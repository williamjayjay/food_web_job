import React from 'react'
import { Container, } from './styles';
import Header from '../Header'
import Center from '../Center'
import MobileMenu from '../MobileMenu'




export default function Main() {
  return (
    <Container>
      
      <Header/>
      <Center/>
      <MobileMenu/>
    </Container>
  )
}

