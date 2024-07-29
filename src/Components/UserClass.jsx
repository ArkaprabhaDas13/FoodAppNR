import React from 'react'

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        console.log("Child constructor")
        // console.log(props)

        this.state = {
            userInfo:{
                login:'Your name here',
                location:'Location here',
                avatar_url:"no image"
            }
        }

    }

    async componentDidMount() {
        console.log("Child componentDidMount")

        const data = await fetch("https://api.github.com/users/ArkaprabhaDas13")            // await is used here because it is an asynchronous process and returns a Promise

        const json = await data.json()                  // await is used here because it is an asynchronous process and returns a Promise
        console.log(json)

        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate()
    {
        console.log("Component UPDATED !!!! component DID Update CALLED")
    }

    componentWillUnmount()
    {
        console.log("Component Unmounted !!")
    }

    render() {

        console.log("Child Render")

        return (
            <div className='user-card shadow-lg'>
                <h1>{this.props.name}</h1>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <p>Name: {this.state.userInfo.login}</p>
                <p>Location: {this.state.userInfo.location}</p>
            </div>
        )
    }
}

export default UserClass


// CLass BASES COMPONENT