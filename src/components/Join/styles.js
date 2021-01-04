import styled from "styled-components";

const img = (props) => props.back ;
const ladox = (props) => props.lado ;

export const ContainerMaster = styled.div`

  height:100%;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position:${ladox};
`;

export const Container = styled.div`

width: min(1024px, 100%);
`;

export const Widget = styled.div`
margin:20%;
  width:50%;
  flex-direction:column;

  p{
  margin-bottom: 25px;
  color: #1D164D;
  width: 70%;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    &:hover,
  &.active {
  color: #707070;
    
  }

  @media (max-height: 600px) {
    font-size: 30px;
    margin-bottom: 20px;

  }

  @media (max-height: 250px) {
  margin-top: -5%;
  font-size: 18;
  margin-bottom: 0px;
  width: 100%;
  }

  @media (max-height: 360px) {
  font-size: 20px;
  margin-bottom: 10px;
  }

  @media (max-height: 200px) {
  margin-top: -8%;
  font-size: 0;
  width: 100%;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    width: 100%;

  }

  @media (max-width: 300px) {
    font-size: 20px;
    width:100%;
  }

  @media (max-width: 155px) {
    margin-top: 100px;
    font-size: 14px;

  }

}
`;

export const Nextzin = styled.div`
    display: flex;
    align-items: center;
  
  @media (max-height: 470px) {
    display: flex;
    align-items:center;

  }

    @media (max-width: 500px) {
    align-items:center;

  }

  @media (max-width: 155px) {
    flex-direction:column
  }

`;

export const Input = styled.input`
  /* display: flex; */
  background: #F0F0F5;
  padding: 14px 16px;
  font-size: 16px;
  color: #6C6C80;
  width: 65%;
  height: 50px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #707070;

  @media (max-width: 360px) {
    width: 150px;


  }

  @media (max-width: 300px) {
    width: 100px;

  }

  @media (max-width: 210px) {
    width: 50px;

  }

  @media (max-width: 155px) {
    width: 50px;
  margin-left: -16px;

  }

`;

export const Button = styled.button`
  background-color: #BADC58;
  height: 50px;
  width:80px;
  border:0;
  border-color: #707070;
  border-radius: 5px;
  padding: 0px 15px 0px 15px;
  margin-left: 15px;
  cursor: pointer;

  &:hover,
  &.active {
  background-color: #1D164D;
    
  }

  @media (max-width: 155px) {
  margin-right: 16px;
  margin-left: 0px;

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

`;
