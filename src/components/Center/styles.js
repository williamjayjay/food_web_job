import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  /* margin-left:-25px; */
  /* align-items:center; */
  /* justify-content:center; */
  padding-left:20vh;
  padding-top:40vh;

  @media (max-width: 1024px) {
    padding-left:5vh;
    /* padding-top:40vh; */

  }

  @media (max-width: 500px) {
    /* padding-left:20vh; */
    padding-top:40vh;

  }
  @media (max-width: 155px) {
    /* padding-left:20vh; */
    padding-top:30vh;
    padding-left:0vh;


  }


`;

export const Input = styled.input`
  /* display: flex; */
  background: #F0F0F5;
  padding: 14px 16px;
  font-size: 16px;
  color: #6C6C80;
  width: 100%;
  height: 50px;
  /* margin-left: 36px; */
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

  };
  
`;

export const Textzin = styled.div`
  margin-bottom: 25px;
  color: #1D164D;
  width: 300px;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    &:hover,
  &.active {
  color: #707070;
    
  }

  @media (max-height: 600px) {
    /* margin-top:-10px; */
    /* padding:10%; */
    font-size: 30px;
    margin-bottom: 20px;

  }

  @media (max-height: 250px) {
  margin-top: -5%;
  font-size: 18;
  margin-bottom: 0px;
  /* margin-left:-20px; */
  width: 100%;
  }

  @media (max-height: 360px) {
  /* margin-top: 10px; */
  font-size: 20px;
  margin-bottom: 10px;
  }

  @media (max-height: 200px) {
  margin-top: -8%;
  font-size: 0;
  /* margin-left:-20px; */
  width: 100%;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    width: 100%;
    /* margin-top: 250px; */

  }

  @media (max-width: 300px) {
    font-size: 20px;
    width:100%;



  }

  @media (max-width: 155px) {
    margin-top: 100px;

    font-size: 14px;

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
    /* display: flex; */
    align-items:center;

  }

  @media (max-width: 155px) {
    flex-direction:column
  }

`;

export const Button = styled.button`
  background-color: #BADC58;
  height: 50px;
  border-width: 1px;
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


