import React from 'react'
import pure from 'recompose/pure'
import styled  from 'styled-components'
import theme from '../constants/theme'
import errorBg from '../assets/error-bg.jpg'

function Error404() {
  return (
    <Wrapper>
      <Overlay>
        Sorry, couldn't find that.
      </Overlay>
    </Wrapper>
  )
}

export default pure(Error404)

//styled-components
const Wrapper = styled.div`
  background: ${theme.darkBg};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${errorBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 45px;
  font-weight: 200;
  color: ${theme.white};
  letter-spacing: 1px;
`
