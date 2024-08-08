
import {render, screen} from '@testing-library/react'
import ContactUs from '../ContactUs'
import "@testing-library/jest-dom"

// Whenever we are testing a UI component, we have to render it to the JS DOM first
// We can do it with the help of {render} method from testingLibrary/React


test("Should load Contact Us component", ()=>{

    // render the component to the JS DOM first
    render(<ContactUs/>) 

    // Trying to find Heading role inside my document
    const heading = screen.getByRole("heading")

    // Trying to find if the Heading role is rendered or not
    expect(heading).toBeInTheDocument();

})

test("Should load Button inside the component", ()=>{

    render(<ContactUs/>);

    // const button = screen.getByRole("button");
    
    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument();
})

test("should load all the input Textboxes", ()=>{
    
    render(<ContactUs/>);

    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes)

    // expect(inputBoxes).toBeInTheDocument();

})