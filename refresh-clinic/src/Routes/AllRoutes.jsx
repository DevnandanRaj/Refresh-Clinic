import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PrivateRoute from '../Routes/PrivateRoute';
import FindDoctors from '../Pages/FindDoctors';
import BookTest from '../Pages/BookTest';
import BookAppointment from '../Pages/BookAppointment';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/finddoctors" element={<PrivateRoute><FindDoctors /></PrivateRoute>} />
        <Route path="/booktest" element={<PrivateRoute><BookTest /></PrivateRoute>} />
        <Route path="/bookappointment" element={<PrivateRoute><BookAppointment /></PrivateRoute>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
