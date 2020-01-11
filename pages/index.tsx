import React, { FunctionComponentElement } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default (): FunctionComponentElement<{}> => <Title>Hello, world!</Title>
