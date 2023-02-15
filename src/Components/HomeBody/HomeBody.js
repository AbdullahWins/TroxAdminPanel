import React from "react";
import HomeTopCard from "../Cards/HomeTopCard";
import Chart from "../Charts/Chart";

const HomeBody = () => {
  const backgroundColors = [
    { color: "bg-primaryMainLight" },
    { color: "bg-secondaryMain" },
    { color: "bg-infoColor" },
    { color: "bg-successColor" },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-4 w-full">
      {/* 4 top cards */}
      <section className="flex items-center justify-around gap-8">
        {backgroundColors.map((backgroundColor, index) => (
          <HomeTopCard
            backgroundColor={backgroundColor}
            key={index}
          ></HomeTopCard>
        ))}
      </section>
      <Chart></Chart>
    </div>
  );
};

export default HomeBody;
