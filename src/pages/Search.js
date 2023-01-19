import React, { Fragment } from 'react'
import Filtrer from '../components/searchComponents/Filtrer'
import Navbar from '../components/sharedComponents/NavBar'

function Search() {
  return (
    <Fragment>
        <Navbar/>
        <Filtrer/>
    </Fragment>
  )
}

export default Search