import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Form from "./Form";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <br/>
      {/* <Form/>  */}
      {/* later.. */}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Matthew Kim &bull; Template by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}
