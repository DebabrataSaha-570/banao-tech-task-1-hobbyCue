"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import { resourcesData } from "../../../../public/data";
import HobbySingleResource from "./HobbySingleResource";

const HobbyResources = () => {
  return (
    <Container className="my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resourcesData.map((resource, index) => (
          <HobbySingleResource
            key={index}
            resource={resource}
          ></HobbySingleResource>
        ))}
      </div>
    </Container>
  );
};

export default HobbyResources;
