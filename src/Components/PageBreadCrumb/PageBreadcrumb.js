import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const PageBreadcrumb = ({page}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='/' id='crumb_item'>Home</Breadcrumb.Item>

    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
  </Breadcrumb>
  )
}

export default PageBreadcrumb