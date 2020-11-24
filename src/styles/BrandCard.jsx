import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.article`
display:flex;
width:20em;
padding:16px;
border: 1px solid #e2e8f0;
margin:1em;
position: relative;
flex-direction:column;
box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;
&:hover{
  box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2); 
}
`
export const CardDetails = styled.div`
  max-width: 100%;
`
export const CardDetailsInner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid #e2e8f0;
`
export const CardImage = styled.img`
object-fit:cover;
position:absolute;
left:0;
border-radius:50%;
background:#ffffff;
max-width: 50%;
`

export const CardBkgrndImage = styled.img`
height: 100px;
object-fit:cover;
position:relative;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
margin-bottom:3.4em;
`
export const CardLink = styled(Link)`
text-decoration:none;
`