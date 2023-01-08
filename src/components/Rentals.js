import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Rental from "./Rental";

const Rentals = ({text}) => {
  const rentals = [
    { title: "Texas, USA", image: house1, price: "1,541", id:'1' },
    { title: "Texas, USA", image: house2, price: "1,541" ,id:'2'},
    { title: "Texas, USA", image: house3, price: "1,541" ,id:'3'},
    { title: "Texas, USA", image: house4, price: "1,541" ,id:'4'},
    { title: "Texas, USA", image: house5, price: "1,541" ,id:'5'},
    { title: "Texas, USA", image: house1, price: "1,541" ,id:'6'},
    { title: "Texas, USA", image: house2, price: "1,541" ,id:'7'},
    { title: "Texas, USA", image: house3, price: "1,541" ,id:'8'},
    { title: "Texas, USA", image: house4, price: "1,541" ,id:'9'},
    { title: "Texas, USA", image: house5, price: "1,541" ,id:'10'},
    { title: "Texas, USA", image: house1, price: "1,541" ,id:'11'},
    { title: "Texas, USA", image: house2, price: "1,541" ,id:'12'},
    { title: "Texas, USA", image: house3, price: "1,541" ,id:'13'},
    { title: "Texas, USA", image: house4, price: "1,541" ,id:'14'},
    { title: "Texas, USA", image: house5, price: "1,541" ,id:'15'},
  ];
  return (
    <>
    <h1 style={{textAlign:'center', fontSize:'20px', fontStyle:'bold'}}>{text}</h1>
      <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
            text={text}
            key={rental.id}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Rentals;
