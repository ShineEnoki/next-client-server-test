"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const RootContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

const Logo = styled.div`
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

const StyledLink = styled(Link)`
  
`


const Nav = () => {
  return (
    <RootContainer>
      <Logo > LegenDarySennin </Logo>
      <LinkContainer>
        <StyledLink href={'/home'} > Home </StyledLink>
        <StyledLink href={'/about'} > About </StyledLink>
        <StyledLink href={'/target'} > Target  </StyledLink>
      </LinkContainer>
    </RootContainer>
  )
}

export default Nav