import styled from "styled-components";

const img = (props) => props.back ;
const ladox = (props) => props.lado ;


export const ContainerMaster = styled.div`
  height: 100vh;
  

  scroll-snap-type: y mandatory;
  overflow-y: scroll;

`;


export const Container = styled.div`

  height: 100vh;
  display:flex;
  scroll-snap-align: start;
  max-width: 1500px;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: auto;
  background-position:${ladox}
`;

export const Spacer = styled.div`
  height:20vh;
  /* display:flex; */


`;

