import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import galaxy from '../images/galaxy.png'


const SecondPage = () => (
// <Layout>
<div>
<SEO title="_." />
<div class="d-flex align-items-center justify-content-center customHeight fade-in">
  <div class='row'>
    <div class='col-2'/>
    <div class='col'>
      <img src={galaxy} width='650vh' />
      <p><Link to="/">__</Link></p>
    </div>
        <div class='col-2'/>
  </div>

</div>

</div>

)

export default SecondPage
