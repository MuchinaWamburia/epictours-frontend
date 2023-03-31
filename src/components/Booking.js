import React, { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import {AuthContext } from './AuthContext';
import Swal from 'sweetalert2';


const Booking = () => {
  const value = useContext(AuthContext);

  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [destinations,setDestinations] = useState("");
  const { id } = useParams();


  useEffect(() => {
    console.log(value)
    fetch(`https://epic-hcpr.onrender.com/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => console.error(error));
  }, [id,value]);



  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  // const user = sessionStorage.getItem("user_id") ? true : false;
  

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleDatehange = (event) => {
    setDate(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const book = {
      phone: phone,
      capacity: capacity,
      date: date,
      destnation_id: id,
      price: price,
      usr_id: value.user.user.id
    };
      fetch("https://epic-hcpr.onrender.com/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: 'Success!',
            text: 'Destination Booked',
            icon: 'success',
            confirmButtonText: 'OK'
          });
    });
          
  
  }
  return (
    <div className="m-10 bg-gray-200 ">
      {isLoggedIn ? (
        <>

          <div className=" mx-20 p-20 min-h-screen">
            
            <form className="  border-2" onSubmit={handleSubmit}>
              <h2 className="text-center text-2xl pb-3">

                Book Your Destination{" "}
              </h2>
              <div className="mb-3">
                <div className=" ">
                  <label className="form-label">Phone No</label>
                  <input
                    onChange={handlePhoneChange}
                    className="form-control m-2 mx-10"
                    name="phone"
                    placeholder="Type Here..."
                    value={phone}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Capacity</label>
                <input
                  onChange={handleCapacityChange}
                  className="form-control m-2"
                  name="capacity"
                  placeholder="Type Here..."
                  value={capacity}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  onChange={handleDatehange}
                  className="form-control m-2"
                  name="date"
                  type="date"
                  placeholder="Type Here.."
                  value={date}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  onChange={handlePrice}
                  className="form-control m-2"
                  name="price"
                  type="price"
                  placeholder="Type Here.."
                  value={price}
                />
              </div>
              <button
                type="submit"
                className=" items-center rounded-md bg-black text-white p-2 btn btn-primary btn-sm m-4"
              >
                Book
              </button>
            </form>
          </div>
        </>
      ) : (
        <p className="bg-white min-h-screen">You must log in first to access this page.</p>
      )}
    </div>
  );
};

export default Booking;
