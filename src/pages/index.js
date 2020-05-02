import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MainSVG from '../components/MainSVG'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site. 🚀 </p>

    <MainSVG />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
