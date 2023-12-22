"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { NavbarList } from "@/constants/NavbarList";
import Link from "next/link";
import { INavbar } from "@/types/INavbar";

const Navbar = () => {
  // path name
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Disclosure as="nav" className="bg-white shadow border-b  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className=" px-2 lg:px-0 flex items-center">
                <h3 className="text-2xl font-bold text-indigo-600 font-ultra">
                  NFTERS
                </h3>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {NavbarList.map((item: INavbar) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className={`${
                        pathName === item.link
                          ? "border-indigo-500"
                          : "border-transparent"
                      } inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* search bar */}
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <IoSearch
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              {/* Upload button and Connect Wallet */}

              <div className="hidden lg:ml-6 lg:flex lg:space-x-8 ">
                <Link href="/upload">
                  <button className=" px-4 py-1 border border-indigo-600 text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 transition-all ease-in-out duration-500 text-[12px]">
                    Upload
                  </button>
                </Link>
                <button className="px-4 py-1 border border-indigo-600 text-base font-medium rounded-full shadow-sm hover:text-white hover:bg-indigo-600 bg-white text-indigo-600 transition-all ease-in-out duration-500 text-[12px]">
                  Connect Wallet
                </button>
              </div>

              {/* Mobail Navbar */}
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MdOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {NavbarList.map((item: INavbar) => (
                <Disclosure.Button
                  as="a"
                  key={item.id}
                  href={item.link}
                  className={`${
                    pathName === item.link
                      ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                      : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  } `}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
