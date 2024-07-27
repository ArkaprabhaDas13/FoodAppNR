import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  
  constructor(props){
    super(props)
    // console.log("Parent constructor")
  }

  componentDidMount(){
    // console.log("Parent componentDidMount")
  }

  render(){
    // console.log("Parent render")
    return(
      <div>
        <h1>About</h1>
        <UserClass name={"Arkaprabha Das"}/>
        
      </div>
    )
  }
}


// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"Arkaprabha Das"} location={"India"} contribution={"Developer"}/> */}
//       <UserClass name={"Akshay Saini"}/>
//     </div>
//   )
// }

export default About