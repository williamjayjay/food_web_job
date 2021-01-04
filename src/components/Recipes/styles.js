import styled from "styled-components";

const img = (props) => props.back ;

export const HeaderImg = styled.div`
  background-image:url(${img});
  background-repeat:no-repeat;
  background-size:contain;
  width: 50%;
  height:200px;

`;

export const ContainerMaster = styled.div`
  background:#eaeaea;

`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1024px, 100%);


  #uva{
      display:flex;
      font-size:28px;
      width:80%;
      justify-content:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

 p{
  color:#1D164D;

 }
    }

`;


export const Header2 = styled.div`
  width:100%;
  
  justify-content:center;
  display:flex;

  p{
    display:flex;
    font-size:16px;
    color:#9E9BAF;
    width:90%;
    justify-content:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
 
  }
  
`;

export const ContainerCard = styled.div`
  width:100%;
  margin:30px auto;

  @media (max-width: 620px) {
   width:100%;
}
`;

export const HeadingCard = styled.div`
  text-align:center;
  font-size:30px;
  margin-bottom: 50px;

  @media (max-width: 620px) {
    padding:20px;
    font-size:20px;
}
`;

export const RowCard = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  flex-flow: wrap;

  @media (max-width: 620px) {
  flex-direction:column;
  flex-flow: column;
  align-items:center;

    }
  
`;

export const Card = styled.div`

box-shadow: 2px 3px #888888;
  width:48%;
  height:200px;
  background:#FFFFFF;
  margin-bottom:25px;
  transition:0.3s;
  border-radius:7px;

  &:hover,
    &.active {
      transform: scale(1.05);
      box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
    
    }

  @media (max-width: 1000px) {

}

@media (max-width: 620px) {
    width:40%;
  height: 190px;

}
  

`;


export const HeadCard = styled.div`

.botao{
    flex-direction:column;
    display:flex;

    a{
    text-decoration:none;

    background-color:#BADC58;
    border-radius: 5px;
    color: #fff;
    font-size:18px;
    font-weight:100;
    padding: 12px;
    justify-content:center;
    display:flex;
    width:50%;
    border:0;
    margin-left:25px;
    margin-top:15px;

    &:hover,
    &.active {
      color: #1D164D;
      background-color:#eee;
    }

    @media (max-width: 620px) {
    font-size:14px;
    padding: 8px;
    width:30%;

    }

  }

    p{

@media (max-width: 620px) {
font-size:16px;

}

margin-left:25px;
margin-top:25px;
color:#1D164D;
font-size:22px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
}
 
  }
  
  border-radius:7px;
  flex-direction:row;
  display:flex;
  color:#fff;


`;

export const CardBody = styled.div`
  padding: 30px 20px;
  text-align:center;
  font-size:18px;

  .btn{
    display:block;
    color:#888;
    text-align:center;
    background: linear-gradient(to right, #ff416c,#ff4b2b );
    margin-top:30px;
    text-decoration:none;
    padding: 10px 5px
  }

`;


export const Header = styled.div`


#voltar{
  text-decoration: none;

  background-color:#BADC58;
    border-radius: 2px;
    color: #fff;
    font-size:18px;
    font-weight:100;
    padding: 5px;
    justify-content:center;
    display:flex;
    width:10%;
    border:0;

    &:hover,
    &.active {
      color: #BADC58;
      background-color:#9E9BAF;
    }
    }

  z-index: 2;
  top:0;
  display: flex;
  align-items: center;
  text-align: left;
  width:100%;

  padding: 10px 0 9px 13px;
  border-bottom: 1px solid #1D164D;

`;

export const ProfilePage = styled.div`
  
`;