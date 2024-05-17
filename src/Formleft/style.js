import styled from "styled-components";
import {ReactComponent as User } from '../icons/user.svg'

export const Container = styled.div`
width: 400px;
height: 400px;
border:1px solid;
margin-top: 40px;
background-color: rgba(0, 0, 0, 0.469);

`
 
export const Sarlavha = styled.div`
width:100%;
font-size:20px;
justify-content: center;
 text-align: center;
 margin-top:15px;
`
export const Box = styled.div`
position: relative;
width:100%;
display:flex;
margin-top:20px;
`
export const Input = styled.input`
width:85%;
height: 50px;
border:1px solid #354545;
border-radius:5px;
background-color: rgba(0, 0, 0, 0.400);
color:red;
outline:none;
margin:auto;
padding-left:40px;
font-size: 22px;
`
export const UserIcon = styled(User)`
position: absolute;
top:45%;
left:20px;
width:20px;
height: 20px;
 
`
export const Bolim = styled.div`
width:90%;
margin:auto;
margin-top:20px;
padding:0;
`
export const Chekbox = styled.input`
width:20px;
height:20px;
border-radius:5px;
border:1px solid;
justify-content: center;
 text-align: center;
`
export const H4 = styled.h4`
font-size:15px;
color:blue;
`
export const Button = styled.button`
width:70px;
height:40px;
border-radius:5px;
border:none;
margin-left:auto;

`