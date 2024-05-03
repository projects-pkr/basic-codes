import React from 'react'

export default function Demonstate_props(props) {
  return (
    <div>
      <h2>Details of candidate</h2>
      <p>name:-{props.name} </p>
      <p>contact:-{props.mo }</p>

    </div>
  )
}
//defination props
  // rops simply stands for properties. They are what make components reusable. Because they perform an essential function – they pass data from one component to another.  

// Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree.

  // here we define props data type in this section we define any data type and after it we pass any other datatype react generte issue it prevent us for wrong datatype insertion. 
  // Demonstate_props.PropTypes={name:PropTypes.string}

  // *****  Here we can use (is required) when we use is required it can't empty.we write like this ({ title:PropTypes.string.isRequired})for use this we need to erase default props value.

  //we can set a default prop type in react.its apear only when value is not provided
  Demonstate_props.defaultProps ={
    name:"username"
  }
