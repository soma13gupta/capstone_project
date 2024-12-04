import {MemoryRouter} from "react-router-dom";
import BookingPage from "./BookingPage";
import { fireEvent, render, screen } from '@testing-library/react';

describe('Booking page', () => {

    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test("User is able to validate appointment times are greater than 0", async () => {
        render(
            <MemoryRouter>
                <BookingPage/>
            </MemoryRouter>
        );
        const timeOptions = await screen.findAllByTestId('res-time');
        expect(timeOptions.length).toBeGreaterThan(0);
        timeOptions.forEach(timeOption =>
            expect(timeOption.value).toMatch(timeFormat)
        );
    }
    );

});


