import styled, { css } from 'styled-components';
import {  Storefront, Web, GroupAdd, Addchart } from '../../styles/Icons';


export const Container = styled.div`
  padding-bottom:20%;

  @media (min-width: 501px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: #7FC862;
    
  }


`;

export const BottomMenu = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  z-index: 2;

  background: #1D164D;
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 10px min(46px, max(10vw, 10px));

  @media (min-width: 501px) {
    display: none;
  }

`;

export const TotalIcon = styled.div`
  flex-direction:column;
  align-items:center;
  justify-content:center;
  display:flex;

  /* width: 100%; */
  justify-content: space-between;
  
  

  p {
    display:flex;
    color:#fafafa;
    font-size:14px;

    @media (max-width: 250px) {
    display:none;

  }
      
  };
`;


export const HomeIcon = styled(Storefront)`${iconCSS}`;
export const JoinIcon = styled(GroupAdd)`${iconCSS}`;
export const BlogIcon = styled(Web)`${iconCSS}`;

export const CadIcon = styled(Addchart)`${iconCSS}`;


