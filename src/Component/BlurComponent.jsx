import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
import Stepper from "./Stepper";
import { Link, useParams } from "react-router";

const BlurComponent = () => {
  const { id } = useParams();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (id) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [id]);

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <div
        className={`absolute top-0 w-full ${
          id ? "block" : "hidden"
        } h-screen backdrop-blur-sm z-20`}
      >
        <div className="bg-[#F2F2F2] w-[70vw] shadow-sm h-screen absolute right-0">
          <div className="flex items-center justify-between bg-white py-4 px-4">
            <div className="flex items-center space-x-4">
              <Link to={"/"}>
                <MdArrowForwardIos />
              </Link>
              <h1>Contract XYZ</h1>
            </div>
            <HiDotsHorizontal />
          </div>
          <div className="border py-2 h-[10vh] bg-white flex items-center justify-between px-5">
            <h1>contractXYZ</h1>
            <Stepper step={step} />
          </div>
          <div className="p-5">
            <div className="flex items-center space-x-2 justify-between bg-white px-5 py-4 rounded-lg">
              <div>
                <h1>Contract XYZ - Version xx</h1>
                <p>Last Updated on 12th September</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center border px-4 py-2 rounded-3xl ml-2">
                  Edit Document
                </button>
                <button className="flex items-center border px-4 py-2 rounded-3xl ml-2">
                  Preview
                </button>
                <FaDownload />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 bg-white flex justify-between items-center">
            <Link to={step <= 1 ? "/" : "#"}>
              <button
                onClick={handlePreviousStep}
                className="border text-black px-4 py-1 rounded-3xl"
              >
                {step > 1 ? "previous" : "Cancel"}
              </button>
            </Link>
            <button
              onClick={handleNextStep}
              className="bg-blue-600 text-white px-4 py-1 rounded-3xl"
            >
              {step == 0
                ? "Review"
                : step == 1
                ? "Send for signature"
                : step === 2
                ? "Internal Signature"
                : step === 3
                ? "executed"
                : "completed"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlurComponent;
