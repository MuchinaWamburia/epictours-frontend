import React from "react";

function About() {
  return (
    <div className="relative flex justify-center items-center">
      <video className="w-full h-70" autoPlay loop muted controls={false}>
        <source src="video1.mp4" type="video/mp4" />
      </video>
      <div className="bg-black">
      <div className="absolute top-12 right-0 w-1/2 text-m mt-10 pr-10 bg-white mr-8 ">
        <p className="p-5 " style={{ fontFamily: "Arial, sans-serif", color: "black", lineHeight: "2" }}>
          Ready to discover the best of Kenya? Look no further than our travel
          website! Our platform offers a diverse range of top destinations
          across Kenya, from the savannahs of the Maasai Mara to the white sandy
          beaches of the coast. Our team of local experts has curated a
          collection of must-see locations, complete with stunning photos,
          insider tips, and detailed information to help you plan the ultimate
          adventure. Whether you're looking to witness the Great Wildebeest
          Migration, climb Mount Kenya, or soak up the sun in Malindi, our
          website has everything you need to make the most of your trip. With
          easy-to-use search and booking tools, personalized recommendations,
          and reliable customer support, our website is your go-to resource for
          planning an unforgettable Kenyan getaway. Visit us today and start
          exploring the magic of Kenya!
        </p>
      </div>
      </div>
    
      <div className="justify-center">
        <h2 className="absolute top-2 left-0 w-full text-center text-black font-bold text-4xl z-10 mt-10">
          About Us
        </h2>
      </div>
    </div>
  );
}

export default About;
