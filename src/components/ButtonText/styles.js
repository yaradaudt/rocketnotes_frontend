import styled from 'styled-components'

export const Container = styled.button`
background: none;
color: ${({ theme, $isactive }) => $isactive === 'false' ? theme.COLORS.GRAY_100 : theme.COLORS.ORANGE};

border: none;
font-size: 16px;
`