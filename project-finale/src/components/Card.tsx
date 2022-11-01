import { FunctionComponent } from "react";
import { Business } from "../interfaces/BusinessCard";
import React from "react";
import { CallSignatureDeclaration } from "typescript";

interface Card {
  name?: string;
  description: string;
  phone: string;
  address: string;
  image: string;
  children: React.ReactNode;
}

const Card: FunctionComponent<Card> = (props) => {
  return (
    <div className="card" style={{ width: "18rem", display: "flex" , flex: "row", margin: "2%"}}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.phone}</li>
        <li className="list-group-item">{props.address}</li>
      </ul>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
