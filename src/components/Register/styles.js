import styled from "styled-components";

export const ContainerMaster = styled.div`
    background-color:#eaeaea;

`;

export const Container =styled.div`
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

 }
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

export const Headerx = styled.header`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left:7%;

  a {
  color: red;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  align-items: center;
}
`;

export const Form = styled.form`

  #nomex {
  width:90%;
  }

  #complemento {
  width:90%;
  }
  
  margin: 10px auto;
  padding:2% ;
  padding-left:10%;
  max-width: 800px;
  background: #FFF;
  border-radius: 8px;

  flex-direction: column;

  h1 {
  font-size: 36px;
  color:#81C962;
  padding-left:25%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

}
`;

export const GroupDivField = styled.div`
   flex: 1;
  display: flex;
  
  #estado{
    width:80%;
  }

  #bairro{
    width:80%;
  }

`;

export const FieldSet = styled.fieldset`
  min-inline-size: auto;
  border: 0;
`;

export const Legend = styled.legend`
    width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h2 {
  font-size: 24px;
  color:blue
}
`;

export const DivField = styled.div`

 .digite{
   font-weight:bold;
 }

    flex: 1;

display: flex;
flex-direction: column;
margin-bottom: 24px;
`;

export const Label = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
  color:#1D164D;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

`;

export const Input = styled.input`
  ::placeholder{
    color: #bbb;
    font-weight:normal
  }




  width:80%;

  background: #F0F0F5;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #1D164D;
  font-weight:bold;

  border-radius: 5px;
`;

export const Button = styled.button`
    width: 35%;
  height: 56px;
  background: green;
  border-radius: 8px;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-start;
  margin-top: 40px;
  transition: background-color 0.2s;
  margin-left:30%;
  
  cursor: pointer;

`;


