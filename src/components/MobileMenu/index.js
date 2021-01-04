import React from 'react'
import { Container,  
  TotalIcon, BottomMenu,CadIcon,JoinIcon, HomeIcon, BlogIcon
} from './styles';

import { Link } from 'react-router-dom';





export default function MobileMenu() {
  return (
    <Container>
     <BottomMenu>
      <Link  id="voltar" to ="/recipes">
        <TotalIcon> 
          <HomeIcon  />
          <p>Healthy recipes</p>
        </TotalIcon>
      </Link>

      <Link  id="voltar" to ="/blog">
        <TotalIcon> 
          <BlogIcon />
          <p>Blog</p>
        </TotalIcon>
      </Link>


      <Link  id="voltar" to ="/join">
        <TotalIcon> 
          <JoinIcon />
          <p>Join</p>
        </TotalIcon>
      </Link>

      <Link  id="voltar" to ="/register">
        <TotalIcon> 
          <CadIcon />
          <p className="letrinha" > Register</p>
        </TotalIcon>
      </Link>

      </BottomMenu>
    </Container>
  )
}

