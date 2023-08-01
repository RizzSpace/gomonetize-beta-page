"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dm_serif_display, bebas_neue, dm_serif_text } from "@/utils/fonts";

export default function Page() {
  const [selectedButton, setSelectedButton] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  function handleClick(button: string) {
    setSelectedButton(button);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (selectedButton === "") {
      alert(
        "Please select either 'Influencer' or 'Brand' before entering your email."
      );
    } else {
      setEmail(e.target.value);
    }
  }

  const handleSubmit = async (e: any) => {
    setLoading(true);
    const response = await axios.post(
      "/api/send",
      {
        email: email,
        type: selectedButton,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      toast.success(
        " Thank you for signing up for the beta. We will get back to you soon.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(false);
  };
  return (
    <div className="bg-betabg sm:h-full md:h-screen">
      <nav className="bg-white w-full ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://gomonetize.in/" className="flex items-center">
            <Image
              src="/logo.jpg"
              className="h-8 mr-3"
              alt="Gomonetize Logo"
              width={32}
              height={32}
            />
            <div className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              <span className={dm_serif_text.className}>Gomonetize</span>
            </div>
          </a>
          <div className="flex md:order-2">
            <a href="https://gomonetize.in">
              <button
                type="button"
                className="text-white bg-black hover:bg-gray-800  font-medium rounded-[4px] text-[20px] px-[30px] py-[10px] text-center"
              >
                <span className={bebas_neue.className}>Home</span>
              </button>
            </a>

            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          {/* <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      <div className="my-[50px] mx-[20px] flex flex-row justify-between items-center flex-wrap md:nowrap">
        <div className=" grow md:ml-[40px] space-y-[8px] md:flex-1 ">
          <div className="text-[16px] tracking-wide">
            <span className={bebas_neue.className}>Sign up for the Beta</span>
          </div>
          <div className="text-[56px] leading-[72px] tracking-[3%] text-black">
            <span className={dm_serif_display.className}>
              Redefining the way of influencer marketing
            </span>
          </div>
          <div className="space-y-[20px]">
            <div className="flex space-x-[15px]">
              <button
                type="button"
                onClick={() => handleClick("influencer")}
                className={`rounded-[4px] border-black border-2 text-lg py-[12px] text-center w-[135px] tracking-wide ${
                  selectedButton === "influencer"
                    ? "text-white bg-black"
                    : " bg-transparent text-black border-black border-2"
                }`}
              >
                <span className={bebas_neue.className}>Influencer</span>
              </button>
              <button
                type="button"
                onClick={() => handleClick("brand")}
                className={`rounded-[4px] border-black border-2 text-lg py-[12px] text-center w-[135px] tracking-wide ${
                  selectedButton === "brand"
                    ? "text-white bg-black"
                    : " bg-transparent text-black border-black border-2"
                }`}
              >
                <span className={bebas_neue.className}>Brand</span>
              </button>
            </div>
            <div className="w-auto lg:w-[500px]">
              <input
                type="email"
                id="email"
                onChange={handleEmailChange}
                className="bg-gray-50 border-2 border-solid border-black text-gray-900 text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:ring-black focus:border-black  block w-full p-[10px] placeholder-gray-600 focus:placeholder-gray-500 placeholder:text-center placeholder:text-lg tracking-wide
            "
                placeholder="ENTER YOUR EMAIL ADDRESS"
                required
              />
            </div>
            <div className="w-auto lg:w-[500px]">
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                disabled={loading} // Disable the button when loading
                className={`text-white bg-black hover:bg-gray-800 rounded-[4px] font-medium text-lg px-[10px] py-[10px] text-center w-full tracking-wide ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <span className={bebas_neue.className}>
                    Join the waitlist
                  </span>
                )}
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
        <div className="grow md:flex-1 flex justify-center">
          <Image src="/star.svg" alt="star vector" width={543} height={486} />
        </div>
      </div>
    </div>
  );
}
