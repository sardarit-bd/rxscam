'use client'

import { useState } from "react";
import LeargeDevice from "./header/LargeDevice";
import SmallDevice from "./header/SmallDevice";

export default function Header({ }) {


  const [userLoggedIn, setuserLoggedIn] = useState(false);


  return (
    <header className="fixed w-full inset-0 z-50 h-fit pbg w-full">

      {/* Main Navigation Bar - Desktop */}
      <LeargeDevice userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} />

      {/* Mobile Header */}
      <SmallDevice userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} />

    </header>
  );
}