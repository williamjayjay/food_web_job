import React from 'react';

import { Link } from 'react-router-dom';
import comida1 from '../../imgs/comida_1.svg';
import comida2 from '../../imgs/comida_2.svg';
import comida3 from '../../imgs/comida_3.svg';
import comida4 from '../../imgs/comida_4.svg';

import { ContainerMaster,Container,Wrapper,Header,ProfilePage,
  Header2,ContainerCard , RowCard, Card, HeadCard,HeaderImg

} from './styles';

import MobileMenu from '../MobileMenu'



export default function Recipes() {

  let recipes = [
    {
        nome : "Broccoli Salad with Bacon",
        img : comida1
    },
    {
        nome : "Classic Beef Burgers",
        img : comida2
    },
    {
        nome : "Classic Potato Salad",
        img : comida3
    },
    {
      nome : "Cherry Cobbler on the Grill",
      img : comida4
  }
 ];

  return (
    <ContainerMaster>
      <Wrapper>
        <Container >
          <Header>
            <Link  id="voltar" to ="/">
              <p  >Voltar</p>
            </Link>
            <div id={'uva'} >
              <p>Our Best Recipes</p>
            </div>
            
          </Header>
          <Header2>
            <p >Far far away, behind the word mountains,  far from the countries<br/> Vokalia and Consonantia, there live the blind texts.</p>
          </Header2>

          <ProfilePage>
            <ContainerCard>
            
            <RowCard>
                {recipes.map(food => (

              <Card key={food} > 
                <HeadCard>
                  <HeaderImg back={food.img} />
                  <div  className="botao" >
                    <p>{food.nome}</p>
                    <a href="#" >See Recipe</a>
                  </div>
                </HeadCard>
              </Card>
                ))}
              

            </RowCard>
            </ContainerCard>            
          </ProfilePage>

        </Container>
      </Wrapper>     
      <MobileMenu/>
    </ContainerMaster>
  )
}

