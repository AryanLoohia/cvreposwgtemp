import React from 'react'
import styled from 'styled-components'
import BHome from './BHome'

const BlogsTag =styled.section`
  margin-top: 10vh;
`

const Blogs = () => {
  return (
    <BlogsTag>
      <section><BHome/></section>
    </BlogsTag>
  )
}

export default Blogs