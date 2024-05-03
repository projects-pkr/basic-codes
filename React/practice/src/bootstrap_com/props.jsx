import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <>
    <div className="row">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div>{props.title}</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">about</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">servise 1</a></li>
            <li><a className="dropdown-item" href="/">service 2</a></li>
            
            <li><a className="dropdown-item" href="/">servise 3</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/">{props.contact} </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
  }
  //defination props
  // rops simply stands for properties. They are what make components reusable. Because they perform an essential function – they pass data from one component to another.  

// Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree.

  // here we define props data type in this section we define any data type and after it we pass any other datatype react generte issue it prevent us for wrong datatype insertion. 
  Navbar.propTypes={ title:PropTypes.string}

  // *****  Here we can use (is required) when we use is required it can't empty.we write like this ({ title:PropTypes.string.isRequired})for use this we need to erase default props value.

  //we can set a default prop type in react.its apear only when value is not provided
  Navbar.defaultProps ={
    title:"set title"
  }

export default Navbar
