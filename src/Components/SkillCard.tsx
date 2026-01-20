import React from "react";
import { motion } from "framer-motion";

// ------------------ SkillBadge ------------------
interface SkillBadgeProps {
  skills: string[];
}

const SkillBadge = ({ skills }: SkillBadgeProps) => {
  return (
    <>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            border border-textColor/40
            bg-black/30
            mb-1
            text-textColor
            text-sm
            font-medium
            transition-all duration-300
            hover:border-primaryColor
            hover:text-primaryColor
            hover:shadow-[0_0_14px_#64FFDA60]
            hover:-translate-y-[2px]
            cursor-default
            sm-mx:px-3 sm-mx:py-1.5
            xs-mx:text-xs
          "
        >
          {skill}
        </motion.div>
      ))}
    </>
  );
};

// ------------------ SkillCard ------------------
interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="
        w-[47%]
        sm-mx:w-full
        mb-4
        rounded-3xl
        border border-primaryColor/70
        bg-gradient-to-br from-black/40 to-black/10
        p-6 bs-mx:p-4
        shadow-[0_0_14px_#64FFDA40]
        transition-all duration-300
        hover:shadow-[0_0_24px_#64FFDA80]
        hover:-translate-y-1
      "
    >
      {/* Title */}
      <h3 className="text-center text-3xl font-bold text-white mb-6 sm-mx:text-2xl">
        {title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-3 bs-mx:gap-2">
        <SkillBadge skills={skills} />
      </div>
    </motion.div>
  );
};

export default SkillCard;
