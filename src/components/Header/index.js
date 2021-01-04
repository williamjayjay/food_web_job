import React from 'react'
import { Container,Logo,ProfileInfo,TopBar,List } from './styles';
import { Link } from 'react-router-dom';





export default function Header() {
  return (
    <Container>
      <div>

      </div>

      <Logo>Healthy Food</Logo>
      <ProfileInfo>

        <TopBar>
          
          <Link className="hh"  to ="/recipes">
            <List><a href="#" >HEALTHY RECIPES</a></List>

          </Link>

          <Link className="hh"  to ="/blog">
            <List><a href="#" >BLOG</a></List>
          </Link>

          <Link className="hh"  to ="/join">
            <List><a href="#" >JOIN</a></List>
          </Link>


          <Link  to ="/register">
            <button  >REGISTER</button>
          </Link>
        </TopBar>

      </ProfileInfo>
      {/* <Main/> */}
    </Container>
  )
}

