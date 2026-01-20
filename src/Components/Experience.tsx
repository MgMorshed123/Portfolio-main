import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";
import { motion } from "framer-motion";

// ------------------ TimelineItem ------------------
const TimelineItem = ({ items }: { items: typeof ExperienceInfo }) => {
  const size = useMatches({ xs: 15, md: 20 });

  return items.map((item, index) => (
    <Timeline.Item
      data-aos="fade-up"
      data-aos-duration="800"
      key={index}
      className="!pt-12 !mb-2 sm-mx:!p-1"
      bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />}
    >
      <motion.div
        whileHover={{ y: -3, boxShadow: "0 0 20px #64FFDA80" }}
        transition={{ duration: 0.3 }}
        className="
          flex flex-col gap-3
          border border-primaryColor
          rounded-2xl
          p-5 sm-mx:p-3
          shadow-[0_0_10px_0_#64FFDA50]
          bg-gradient-to-br from-black/40 to-black/10
          transition-all duration-300
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
          {item.desc}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 items-center text-textColor text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
          <span className="font-semibold text-white">Skills:</span>
          {item.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded-full border border-textColor/50 text-textColor text-sm hover:border-primaryColor hover:text-primaryColor transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </Timeline.Item>
  ));
};

// ------------------ Experience Section ------------------
const Experience = () => {
  const dot = useMatches({ xs: 25, md: 30 });

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
        bulletSize={dot}
        lineWidth={2}
      >
        <TimelineItem items={ExperienceInfo} />
      </Timeline>
    </section>
  );
};

export default Experience;
