import styled from "styled-components";

export const Container = styled.div`
  align-items:center;
  background-color:#81C962;
  /* width: 600px; */
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  position:fixed;
  width: 100%;

  padding: 10px min(46px, max(10vw, 10px));
  border-bottom: 1px solid #1D164D;
  /* max-width: 1400px; */



`;

export const Logo = styled.div`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'sans-serif';
/* display: flex; */
font-size:32px;
font-weight:600;
margin-right:40px;
width:38%;
&:hover,
&.active {
color: #1D164D;
  
}




@media (max-width: 800px) {
font-size:20px;


  }


`;



export const ProfileInfo = styled.div`
  /* list-style: none; */
  /* text-decoration: none; */

  @media (max-width: 500px) {
    display: none;
  }

  
`;

export const TopBar = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  display: flex;
  justify-content: space-between;
  /* list-style: none; */
  /* text-decoration: none; */

  /* margin-right:30vh */
  .hh{
    /* background-color:#000; */
    text-decoration: none;
  display: flex;


    }

  button {

    background-color:#fff;
    border-radius: 5px;
    color: #BADC58;
    font-size:18px;
    font-weight:100;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border:0;
    margin-right:5vh;

  


    /* text-decoration: none; */
    &:hover,
    &.active {
      /* text-decoration: 'none'; */
      /* text-decoration: none; */
      color: #fff;
      background-color:#BADC58;
    
    }
    }

  > .afk{




/* text-decoration: 'none'; */

display: flex;
font-weight: bold;
/* color:#BADC58; */
/* background-color: #fff; */
border-radius: 5px;
padding: 10%;
padding-left: 20%;
padding-right: 20%;

&:hover,
&.active {
  /* text-decoration: 'none'; */
  /* text-decoration: none; */

/* color: #fff; */
/* background-color: #BADC58; */
}

}


`;


export const List = styled.li`
  font-size:18px;


  > a {
    text-decoration: none;  
    display: flex;
    &:hover,
    &.active {
    color: #1D164D;
    };
  };

  font-weight: bold;
  display: flex;
  align-items:center;
  padding-right:10vh;
  

  @media (max-width: 700px) {
  font-size:16px;
  padding-right:2vh;

  }


`;
