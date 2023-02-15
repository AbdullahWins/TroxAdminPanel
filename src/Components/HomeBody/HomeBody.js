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
    <div className="flex flex-col justify-around pt-10 gap-4 w-full">
      {/* 4 top cards */}
      <section className="flex justify-between gap-8 px-4">
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
