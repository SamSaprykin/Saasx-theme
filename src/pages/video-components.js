import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoComponentsList from "../components/TheSaasComponents/VideoComponents/videoComponents"

const VideoComponentsPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoComponentsList />
  </Layout>
)

export default VideoComponentsPage