import LeargeDevice from "./header/LargeDevice";
import SmallDevice from "./header/SmallDevice";

export default function Header({ }) {


  return (
    <header className="fixed w-full inset-0 z-50 h-fit pbg w-full">

      {/* Main Navigation Bar - Desktop */}
      <LeargeDevice />

      {/* Mobile Header */}
      <SmallDevice />

    </header>
  );
}