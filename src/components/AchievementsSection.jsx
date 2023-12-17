"use client";
import React from "react";
import dynamic from "next/dynamic";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";

const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 1000, // Set the delay (in milliseconds) between slides
    // disableOnInteraction: false, // Set to false to keep autoplay working even when user interacts with the slider
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

// const achievementsList = [
//   {
//     metric: "Satisfied Clients",
//     value: "18",
//     postfix: "MI +",
//   },
//   {
//     // prefix: "~",
//     metric: "Project Completed",
//     value: "20",
//     postfix: "MI +",
//   },
//   {
//     metric: "Project Launched",
//     value: "30 MI +",
//   },
//   {
//     metric: "Years Completed",
//     value: "50",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         <Swiper
//           {...sliderSettings}
//           autoplay={{ delay: 1000 }}
//           // navigation
//           // pagination={{ clickable: true }}
//         >
//           {achievementsList.map((achievement, index) => {
//             return (
//               <SwiperSlide key={`slide${index}`} className="">
// <div>
//   <h2 className="text-white text-4xl font-bold flex flex-row">
//     {achievement.prefix}
//     <AnimatedNumbers
//       includeComma
//       animateToNumber={parseInt(achievement.value)}
//       locale="en-US"
//       className="text-white text-4xl font-bold"
//       configs={(_, index) => {
//         return {
//           mass: 1,
//           friction: 100,
//           tensions: 140 * (index + 1),
//         };
//       }}
//     />
//     {achievement.postfix}
//   </h2>
//   <p className="text-[#ADB7BE] text-base">
//     {achievement.metric}
//   </p>
// </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
const data = [
  {
    metric: "Satisfied Clients",
    value: "18",
    postfix: "MI +",
  },
  {
    // prefix: "~",
    metric: "Project Completed",
    value: "20",
    postfix: "MI +",
  },
  {
    metric: "Project Launched",
    value: "30 MI +",
  },
  {
    metric: "Years Completed",
    value: "50",
  },
];

import "swiper/css";

export default function AchievementsSection() {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-12 sm:px-16 flex flex-row items-center justify-between">
        <Swiper {...sliderSettings}>
          {data.map((achievement, i) => (
            <SwiperSlide key={`slide${i}`}>
              <div className="w-full">
                <h2 className="w-full text-white text-4xl font-bold flex flex-row mb-4 sm:mb-0">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold w-full"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
