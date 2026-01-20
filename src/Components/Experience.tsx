import React, { useState } from "react";
import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";
import { motion } from "framer-motion";

const Experience = () => {
  const dotSize = useMatches({ xs: 25, md: 30 });
  const bulletIconSize = useMatches({ xs: 15, md: 20 });

  // Track which timeline item is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="Experience"
      className="px-16 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-24 font-mono"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white">
          <span className="text-primaryColor">04.&nbsp;</span>Experience
        </h1>
        <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-primaryColor shadow-[0_0_12px_#64FFDA]" />
      </div>

      {/* Timeline */}
      <Timeline
        color="#64FFDA"
        active={ExperienceInfo.length}
        bulletSize={dotSize}
        lineWidth={2}
        className="relative"
      >
        {ExperienceInfo.map((item, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <IconBriefcaseFilled
                className="!text-bgColor"
                size={bulletIconSize}
              />
            }
            className="!pt-12 !mb-2 sm-mx:!p-1 relative group"
          >
            {/* Glow line effect */}
            <div
              className={`
                absolute left-[8px] top-0 bottom-0 w-[2px] bg-primaryColor transition-all duration-300
                ${hoveredIndex === index ? "shadow-[0_0_12px_#64FFDA]" : ""}
              `}
            />

            {/* Timeline Card */}
            <motion.div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -3, boxShadow: "0 0 20px #64FFDA80" }}
              className="
                flex flex-col gap-3
                border border-primaryColor
                rounded-2xl
                p-5 sm-mx:p-3
                shadow-[0_0_10px_0_#64FFDA50]
                bg-gradient-to-br from-black/40 to-black/10
                transition-all duration-300
                relative
                z-10
              "
            >
              {/* Role and Company */}
              <div className="flex flex-col gap-1">
                <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base">
                  {item.role}
                </div>
                <div className="text-textColor text-lg font-semibold md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                  {item.company} &#x2022; {item.date}
                </div>
              </div>

              {/* Description */}
              <div className="text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs">
                {item.desc.split(". ").map((line, idx) => (
                  <p
                    key={idx}
                    className="
                      mb-2
                      transition-all duration-300
                      text-textColor
                      cursor-default
                      hover:text-primaryColor
                      hover:shadow-[0_0_12px_#64FFDA]
                    "
                  >
                    {line}.
                  </p>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 items-center text-textColor text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                <span className="font-semibold text-white">Skills:</span>
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="
                      px-2 py-1
                      rounded-full
                      border border-textColor/50
                      text-textColor text-sm
                      hover:border-primaryColor
                      hover:text-primaryColor
                      hover:shadow-[0_0_12px_#64FFDA]
                      transition-all duration-300
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
