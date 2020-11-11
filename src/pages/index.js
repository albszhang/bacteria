import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import moon from '../images/moon.png'
// import squareTwo from '../images/square2.jpeg'

const IndexPage = () => (
// <Layout>
<div>
{/*
    <div class='container fade-in'>
      <div class='row align-items-center'>
        <div class='col-2'/>
        <div class='col align-self-center'>
          <img src={moon}/>
        </div>
      <div class='col-2'/>
      </div>
      <div class='row'>
        <h1> . </h1>
        <h1> _ </h1>
      </div>
    </div>

*/}

  <SEO title="_" />

<div class="d-flex align-items-center justify-content-center customHeight fade-in">
  <div class='row'>
    <div class='col-1'/>
    <div class='col'>
      <img src={moon} width='250vh' />
              <p style={{paddingTop: '1px'}}><Link to="/2">_</Link></p>
    </div>
      <div class='col-2 align-items-end justify-content-end'>

      </div>
  </div>

  <div class='row'>

  </div>
</div>


</div>

)

export default IndexPage
