import { FunctionComponent, useEffect, useState } from "react";
import React from "react";
import Card from "./Card";
import { getBizzCards } from "../services/bizzCardService";
import Navigation from "./navigation";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import { Business } from "../interfaces/BusinessCard";

interface AllCardsProps {}

const AllCards: FunctionComponent<AllCardsProps> = () => {
  const [cards, setCards] = useState<Business[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBizzCards()
      .then((res) => {
        setCards([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navigation />
      <h1 className="d-flex justify-content-center m-5">All Cards</h1>
      <div className="d-flex justify-content-center">
        {cards.map((item: Business, index) => (
          <Card
            key={index}
            name={item.bizzName}
            description={item.bizzDescription}
            address={item.bizzAdress}
            image={item.bizzImage}
            phone={item.bizzPhone}
          >
            {/* HERE BE AN EDIT BUTTON */}
            <>
              <Link to={"/"} className="btn  my-1 py-3">
                Edit
              </Link>
              <button className="btn  my-1 py-3">Delete</button>
            </>
          </Card>
        ))}
      </div>



      

      <Footer />
    </>
  );
};

export default AllCards;
