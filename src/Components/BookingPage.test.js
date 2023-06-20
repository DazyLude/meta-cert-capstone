import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from './BookingPage';
import BookingPage from './BookingPage';


test('Renders the BookingForm on booking page', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});
