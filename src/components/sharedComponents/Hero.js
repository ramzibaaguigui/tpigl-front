import Navbar from "./NavBar";

const Hero = () => {
  return (
    <div className="relative bg-theme-orange">
      <div className="absolute w-full">
        <img
          className="w-full object-cover"
          src="/hero_background.png"
          alt="hero"
        ></img>
      </div>

      <div className="absolute w-full ">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
