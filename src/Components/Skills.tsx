import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="my-24 font-mono px-16 md-mx:px-8 sm-mx:px-6 xs-mx:px-4"
    >
      {/* Section Header */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white">
          <span className="text-primaryColor">03.&nbsp;</span>Skills
        </h1>

        {/* Accent line */}
        <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-primaryColor shadow-[0_0_12px_#64FFDA]" />
      </div>

      {/* Skill Cards */}
      <div className="mx-auto max-w-6xl flex flex-wrap justify-between sm-mx:justify-center gap-6 md-mx:gap-4">
        {SkillInfo.map((skill: any, index: number) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
