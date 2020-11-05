import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const TitleImage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "titleImage.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className={styles.titleImage}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div>
        <h1>VILLA OLIVA VERDE</h1>
        <p>
          Isolated from the tourist crowd for a pleasant
          <br /> and peaceful vacation
        </p>
      </div>
    </BackgroundImage>
  )
}

export default TitleImage
