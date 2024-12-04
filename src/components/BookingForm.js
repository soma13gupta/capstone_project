import '../styles/BookingPage.css';
import Formfield from "./Formfield";

import React, { useState} from "react";

export default  function BookingForm(props) {
    const minimumDate = new Date().toISOString().split('T')[0];
    const occasions = ['Birthday', 'Anniversary'];
    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(props.availableTimes[0]);
    console.log("availabletimes" + props.availableTimes.length);
    const [
        numberOfGuests,
        setNumberGuests
    ] = useState(1);
    const [occasion, setOccasion] = useState(occasions[0]);

    const handleDateChange = e => {
        setDate(e.target.value);
       props.dispatchOnDateChange(e.target.value);
    };
    const handleTimeChange = e => {
        setTime(e.target.value);
        props.dispatchOnDateChange(e.target.value);
    };
    const handleOccasionChange = e => {
        setOccasion(e.target.value);
       props.dispatchOnDateChange(e.target.value);
    };
    const handleGuestCountChange = e => {
        setNumberGuests(e.target.value);
        props.dispatchOnDateChange(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, time, numberOfGuests, occasion });
    };
const isDateValid = () => date !== '';
const invalidDateErrorMessage = 'Please choose a valid date';

const isTimeValid = () => true;
const invalidTimeErrorMessage = 'Please choose a valid time';

const isGuestValid = () => numberOfGuests >= 1 && numberOfGuests <= 10;
const invalidGuestErrorMessage = 'Please choose a valid number of guests';

const allDataValid = () => isDateValid() && isTimeValid() && isGuestValid();

    return <>

        <div className="booking_page">
            <div className="booking_page_components">
                <form onSubmit={handleSubmit}>
                      <Formfield label="Choose Date:" htmlFor="res-date" hasError={!isDateValid()} errorMessage={invalidDateErrorMessage}>
                            <input type="date" id="res-date" name="bres-date" value={date} onChange={handleDateChange}/>
                      </Formfield>

                    <Formfield label="Choose Time:" htmlFor="res-time" hasError={!isTimeValid()}
                               errorMessage={invalidTimeErrorMessage}>
                        <select id="res-time" name="res-time" value={time} onChange={handleTimeChange}>
                            { props.availableTimes.map(times =>
                                <option data-testid="booking-time-option" key={times}>
                                    {times}
                                </option>
                            )
                            }
                        </select>
                    </Formfield>

                    <Formfield label="Number of guests" htmlFor="guests" hasError={!isGuestValid()}
                               errorMessage={invalidGuestErrorMessage}>
                        <input type="number" id="guests" name="guests" placeholder="1" min="1"
                               max="10" value={numberOfGuests} onChange={handleGuestCountChange}/>
                    </Formfield>

                    <Formfield label="Occasion:" htmlFor="occasion" hasError={!isTimeValid()}
                               errorMessage={invalidTimeErrorMessage}>
                        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </Formfield>


                    <button  className="submit-button" disabled={!allDataValid()} type="submit"  onClick={ handleSubmit } > Submit </button>
                </form>
            </div>
        </div>
    </>

  }