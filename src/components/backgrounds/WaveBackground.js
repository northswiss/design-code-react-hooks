import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        /* Blurring a large element can be real bad for performance, so it may be
      better to create a PNG in this case */
        src="/images/waves/wave1.png"
        style={{ top: "0px" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`
