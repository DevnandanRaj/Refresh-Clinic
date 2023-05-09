import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "../Routes/PrivateRoute";
import FindDoctors from "../Pages/FindDoctors";
import BookTest from "../Pages/BookTest";
import BookAppointment from "../Pages/BookAppointment";
import Signup from "../Pages/Signup";
import Receipt from "../Pages/Recipt";
import Medicine from "../Pages/Medicines";
import Cart from "../Pages/Cart";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking-success" element={<Receipt />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/finddoctors"
          element={
            <PrivateRoute>
              <FindDoctors />
            </PrivateRoute>
          }
        />
        <Route
          path="/booktest"
          element={
            <PrivateRoute>
              <BookTest />
            </PrivateRoute>
          }
        />
        <Route
          path="/book-appointment/:id"
          element={
            <PrivateRoute>
              <BookAppointment />
            </PrivateRoute>
          }
        />
        <Route
          path="/medicines"
          element={
            <PrivateRoute>
              <Medicine />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
