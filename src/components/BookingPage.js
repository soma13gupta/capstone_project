import React, {useReducer} from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../FakeApis';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => {
    return [...initialAvailableTimes, ...fetchAPI(new Date())];
}
export default  function BookingPage() {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();
    const submitForm = (formData) => {
        // eslint-disable-next-line no-undef
        const response = submitAPI(formData);
        if (response) navigate('/confirmedBooking');
        console.log("submit called");
    };

    return (
        <div className="bookings">
            <h2>Table reservation</h2>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitForm={submitForm}/>
        </div>
    );
}

