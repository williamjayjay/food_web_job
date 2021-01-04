import React from 'react'
import { Link } from 'react-router-dom';
import { Container,ContainerMaster, Header, Header2,CardBody } from './styles';
import Card from '../components/Card'

import avatar from '../../imgs/avatar.png'

import imgBlog1 from '../../imgs/blog_image_1.svg';
import imgBlog2 from '../../imgs/bloco_image_2.svg';
import imgBlog3 from '../../imgs/bloco_image_3.svg';
import imgBlog4 from '../../imgs/bloco_image_4.svg';
import MobileMenu from '../MobileMenu'


export default function Blog() {

  const postBlog = [
    {
        title : 'Quick-start guideto nuts and seeds',
        imgUrl:imgBlog1,
        profileImg:avatar,
        profileName:'Kevin Ibrahim',
    },
    {
      title : 'Nutrition: Tips for Improving Your Health',
      imgUrl: imgBlog2,
      profileImg:avatar,
      profileName:'Mike Jackson',
    },
    {
      title : 'The top 10 benefits of eating healthy',
      imgUrl:imgBlog3,
      profileImg:avatar,
      profileName:'Bryan McGregor',
    },
    {
      title : 'What Makes a Healthy Diet?',
      imgUrl:imgBlog4,
      profileImg:avatar,
      profileName:'Jashua',
  }
 ];

  return (
  <ContainerMaster>
    <Container>
    <Header>
            <Link  id="voltar" to ="/">
              <p>Voltar</p>
            </Link>
            <div id={'uva'} >
              <p>Read Our Blog</p>
            </div>
            
    </Header>
    <Header2>
      <p >Far far away, behind the word mountains,  far from the countries<br/> Vokalia and Consonantia, there live the blind texts.</p>
    </Header2>

      <CardBody>

          {postBlog.map(posts => (
                  <Card 
                    title={posts.title}
                    imageUrl={posts.imgUrl}
                    profileImg={posts.profileImg}
                    profileName={posts.profileName}
          
                  />
          ))}
      </CardBody>

    </Container>
    <MobileMenu/>
  </ContainerMaster>

  )
}

