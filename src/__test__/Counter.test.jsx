import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {Counter} from '../Counter.jsx'

describe('Counter component', () => {
    it("Initially displays a count of 0", () => {
        render(<Counter />);
        const countElement = screen.getByText(/Counter:/i);
        expect(countElement).toHaveTextContent('Counter: 0');
    });
    it("increments the counter when the Increment button is clicked", async() => {
        const user=userEvent.setup();
        render(<Counter />);
        const countElement = screen.getByText(/Counter:/i);
        const incrementButton = screen.getByRole('button', { name: /increment/i });
        await user.click(incrementButton);
        expect(countElement).toHaveTextContent('Counter: 1');
    });
    it("Counter changes value dynamically when the Increment button is clicked multiple times", async () => {
        const user=userEvent.setup();
        render(<Counter />);
        const countElement = screen.getByText(/Counter:/i);
        const incrementButton = screen.getByRole('button', { name: /increment/i });
        await user.click(incrementButton);
        await user.click(incrementButton);
        await user.click(incrementButton);
        expect(countElement).toHaveTextContent('Counter: 3');
    })
});