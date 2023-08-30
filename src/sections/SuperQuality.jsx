import Button from "../components/Button";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into the world of ultimate comfort and style with Nike's latest
          innovation - the SuperQuality Shoes. These shoes are more than just
          footwear; they're a statement of excellence.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Introducing Nike SuperQuality Shoes: Unmatched Style and Performance</p>
        <div className="mt-11">
        <Button label="View details" />
        </div>
      </div>
      <div>
        <img className="flex-1 flex justify-center items-center object-contain" src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
