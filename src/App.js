import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import ConfirmedBooking from "./components/ConfirmedBooking";
import BookingPage from "./components/BookingPage";


function App() {
  return (
      <div className="app">
          <Layout>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/reservation" element={<BookingPage/>}/>
              <Route path="/confirmedBooking" element={<ConfirmedBooking/>}/>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </Layout>
      </div>

  );
}


export default App;
