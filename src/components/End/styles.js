import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  /* margin-top:50vh; */
  /* align-items:center;
  justify-content:center; */
  width:500px;
  height:650px;

  /* @media (max-height: 300px) {
    width:400%;
    margin-left:-8vh

  } */


`;

export const Quadro = styled.div`
    display: flex;
    align-items: center;
 /* min-width:30vh; */
 /* padding-left:45%; */
 /* margin-top:-15%; */
 align-items:center;
 /* margin-top:8%; */
 display:flex;
  flex-direction:column;
  justify-content:center;

  /* @media (max-width: 900px) {
    min-width:50%;
    margin-left:5%;

  } */
  /* padding-top:15vh; */
  padding-left:600px;

  @media (max-height: 600px) {
height:80%;
  }

  @media (max-height: 450px) {
height:60%;
  }
  /* width:150%; */
  
  }



  button {

    @media (max-width: 700px) {
      padding: 8px;
font-size:15px;


  }

    /* height: 100vh; */
  display:flex;
background-color:#BADC58;
border-radius: 5px;
color: #fff;
font-size:18px;
/* font-weight:bold; */
padding: 12px;
padding-left: 20px;
padding-right: 20px;
border:0;
margin-right:50vh;
margin-top:25px;




/* text-decoration: none; */
&:hover,
&.active {
  /* text-decoration: 'none'; */
  /* text-decoration: none; */
  color: #BADC58;
  background-color:#eee;

}



}



  h2{
    color:#2D3561;
    /* margin-left:-5%; */
  width: 450px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    &:hover,
  &.active {
  color: #707070;
    
  }

  


  @media (max-height: 600px) {
    font-size: 20px;

  }

  @media (max-height: 450px) {
  font-size: 10px;
    /* height:60% */
  }



  }

  p {
  /* width:70%; */
  font-size: 16px;
  letter-spacing: 3px;
  /* width: 450px; */

  color: #707070;

  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  &:hover,
  &.active {
  color: #2D3561;
    
  };

  @media (max-height: 600px) {
    font-size: 12px;

  };


  };
 
`;

