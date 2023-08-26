import { render,screen,fireEvent } from "@testing-library/react";
import  Counter  from "./Counter";

describe("<Counter />", ()=>{
    test("<renders tthe test Counter Component", ()=>{
        render(<Counter />);
        const counterElement = screen.getByText(/Counter:/i)
        const buttonElement = screen.getByText(/Click meee!!!/i)

        expect(counterElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
    test("<increments the count when the button is clicked", ()=>{
        render(<Counter />);
        const buttonElement = screen.getByText(/Click meee!!!/i);
        
        fireEvent.click(buttonElement);
        const counterElement = screen.getByText(/Counter: 1/i);

        expect(counterElement).toBeInTheDocument();

    })
});