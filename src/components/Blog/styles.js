import styled from "styled-components";


export const ContainerMaster = styled.div`
  background:#eaeaea;

`;

export const Container = styled.div`
  background-color:#eaeaea;
  padding-bottom: 2%;
  width: min(1024px, 100%);

  margin: 0 auto;

  #uva{
      display:flex;
      font-size:28px;
      width:80%;
      justify-content:center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

    p{
     color:#1D164D;
   
    };
  };

`;

export const CardBody = styled.div`
  padding:3%;
  
  display:flex;
  overflow-x: auto;

  ::-webkit-scrollbar{
    width:0
  };
  scrollbar-width: none;
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
  width:100%;
  text-align: left;

  padding: 10px 0 9px 13px;
  border-bottom: 1px solid #1D164D;

`;