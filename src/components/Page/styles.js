import styled from "styled-components";

const img = (props) => props.back ;
const ladox = (props) => props.lado ;


export const ContainerMaster = styled.div`
  height: 100vh;
  

  scroll-snap-type: y mandatory;
  overflow-y: scroll;

`;

export const Footer = styled.div`
  background-color: #fafafa;
  margin-top:-30px;
  /* padding:20px; */
  height: 50px ;
  flex-direction:row;
  display:flex;
  justify-content:flex-end;
  /* margin-right:5%; */

  #aa{
color:#9E9BAF;
padding-right:40%;



    }


  p{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'sans-serif';
  color:#9E9BAF;
  font-weight:600;
  /* margin-left:5%; */
  margin-right:5%;
  font-size:14px;
  padding-top:5px;


  }

`;


export const Container = styled.div`

  height: 100vh;
  display:flex;
  scroll-snap-align: start;
  max-width: 1500px;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: auto;
  background-position:${ladox};
`;

export const Spacer = styled.div`
  height:10vh;
  /* display:flex; */


`;

