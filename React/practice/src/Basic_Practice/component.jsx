//  component is a single independent unit of a user interface (UI) or Components are independent and reusable bits of code.Components are like functions that return HTML elements. (They serve the same purpose as JavaScript functions, but work in isolation and return HTML.) 
// there ate twotypes of component in react 1.functional component 2.class component
// A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
// IN below example component is a functonal commponent  
import React from "react";
function Component(){
    return(
    <>
    <h2>here it is functional component</h2>
    <Class_com/>
    </>
    )}
   
    // class component=> A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

// The component also requires a render() method, this method returns HTML.



class Class_com extends React.Component{
    render(){
        return(
            <>
           <h3>it is returned by functional component</h3>
            <h3>this is a class component </h3>
            </>
            )
    }
}
// if we use class component and function component both in a component we need to return class component in other component explicitly 
export default Component;