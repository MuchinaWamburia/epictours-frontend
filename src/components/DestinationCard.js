import React from "react";
import { Link } from "react-router-dom";



function DestinationCard({destination}){


    return (
    <div className="flex flex-wrap justify-center">


<div  className= "card m-2 bg-white">
<div className="w-full rounded-lg shadow-md lg:max-w-sm">
    <img className="object-cover w-full h-40" src= {destination.image} alt=""/>
    <div className="p-4">
        {/* destination price, description */}
       <p className=" text-sm font-bold mb-2 text-black-600"> {destination.location} </p>
        <p className="text-sm text-gray-900 mb-2"> <b>Price :</b> {destination.price}</p>
        <p className="text-sm text-gray-900 mb-2"><b>Description :</b> {destination.description.substring(0, 100)}{destination.description.length > 100 ? "..." : ""}</p>
        <div className="text-center ">
        <Link to={`/booking/${destination.id}`}>
        <button className="px-4 py-2 text-sm text-white bg-purple-900 hover:bg-purple-500 rounded-full mt-3
         shadow-md">
            Book Now
        </button>
        </Link>
        </div>
       </div>
     </div>
        </div>

</div>
    )


}
export default DestinationCard
