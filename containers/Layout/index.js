import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../components/molecule/NavBar";
import { theme } from "../../theme";
import { GlobalCSS } from "../../public/styles/style";
// import Footer from "../../components/molecule/Footer";
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"; 
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react"
import Image from 'next/image';
import ModalDetail from "../../components/ModalDetail";
import nav from "../../components/nav";
import NavBar from "../../components/nav";

const ContainerStyle=styled(Container)`
    max-width:100% !important;
`;

 const Contner = styled.div`

 .ranger-un
 {
   background: #f7931e;
 }
 .ranger-un:hover
 {
   background: #fff;
   transition: .9s;
   width: 40%;
   flex: 3;
 }

 .ranger-deux
 {
   background: #42210b;
 }
 .ranger-deux:hover
 {
   background: #fff;
   transition: .9s;
   flex: 3;
 }
/* 
 .ranger-deux
 {
   background: blue;
 } */
 .ranger-deux:hover
 {
   background: #fff;
   transition: .9s;
   flex: 3;
 }

 .ranger-trois
 {
   background: #c1272d;
 }
 .ranger-trois:hover
 {
   background: #fff;
   transition: .9s;
   flex: 3;
 }

 .ranger-quatre
 {
   background: #f15a24;
 }
 .ranger-quatre:hover
 {
   background: #fff;
   transition: .9s;
   flex: 3;
 }

 .column {
    height: 100vh;
    .appercu
    {
      display:none;
    }

    span 
    {
      font-size:50px;
      font-size: 50px;
      color: #fff;
      font-weight: 700;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
    }
}

.column:hover 
{
  .appercu
    {
      display:block;
    }
    span 
    {
      color:#000;
      font-size:30px;
      margin: auto;
      position: relative;
      top: 0px;
      left: 45%;
      transform: translate(-50%, -50%);
      border: 1px solid #000;
      padding: 10px;
      cursor: pointer;
      
    }
}

.modal-dialog
{
  width: 100% !important;
  max-width: 100%;
  top: 0;
  margin: 0;
  height: 100vh !important;
}
`;

const Layout = ({ children, ...props }) => {
  return (
    <Contner className='contner'>
    <NavBar/>
  <ContainerStyle>
    <Row >
      <Col className='ranger-un column'>
        <div className="appercu">
        <Image src="/img/lamp.png" layout="fill" />
         
        </div>
        <ModalDetail texte="HOME" />
      
      </Col>

      <Col className='ranger-deux column'>
      <div className="appercu">
          <Image src="/img/lamp.png" layout="fill" />
         
        </div>
        <ModalDetail texte="LAMP" />
      </Col>    

    <Col className='ranger-trois column' >
    <div className="appercu">
        <Image src="/img/menage.png" layout="fill" />
          
        </div>
        <ModalDetail texte="MENAGE" />
    </Col>

    <Col className='ranger-quatre column'>
    <div className="appercu">
        <Image src="/img/gadget.png" layout="fill" />
        </div>
        <ModalDetail texte="GADGET" />
    {/* <StaticImage className= 'img' id= 'img'
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`,
              cursor: `pointer` }}
    /> */}
    
  </Col>
</Row>
</ContainerStyle>
</Contner>
  );
};

export default Layout;
