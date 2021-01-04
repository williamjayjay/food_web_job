import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { Container, Input,Textzin,Nextzin,Button  } from './styles';





export default function Center() {
  return (
    <Container>
      <Textzin>Ready for Trying a new recipe?</Textzin>
      <Nextzin>
        <Input placeholder ="Search healthy recipes" />
        <Button>
          <FiSearch color='#FFFFFF' size="22" />
        </Button>
      </Nextzin>
  </Container>
  )
}

