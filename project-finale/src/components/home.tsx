import { FunctionComponent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBizzCards } from "../services/bizzCardService";
import { Business } from "../interfaces/BusinessCard";
import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Card from "./Card";
import HomeStart from "./homeStart";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
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
      
      <div className="d-flex row justify-content-center">
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
          <button className="btn  my-1 py-3">
            Delete
          </button>
            </>
          </Card>
        ))}
      </div>
      <HomeStart />

      <Footer />
    </>
  );
};

export default Home;
