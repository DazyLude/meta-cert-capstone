import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingConfirm from './BookingConfirm';

export default function Main() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/booking" element={<BookingPage />} />
			<Route path="/booking-confirmation" element={<BookingConfirm />} />
		</Routes>
	);
}