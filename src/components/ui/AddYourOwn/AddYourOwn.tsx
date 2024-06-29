"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import { FaCirclePlus } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

const AddYourOwn = () => {
  return (
    <section className="bg-[#F7FDFF] py-14 my-10">
      <Container>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="border border-[#CED4DA] rounded-lg p-7"
        >
          <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold">
            {" "}
            <span>
              <FaCirclePlus className="text-[#0096C8]" />
            </span>{" "}
            Add your own
          </h2>

          <p className="text-sm md:text-lg font-light my-5">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>

          <PrimaryButton> Add new </PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
};

export default AddYourOwn;
