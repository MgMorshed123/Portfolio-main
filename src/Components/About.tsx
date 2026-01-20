import { Info } from "../User";
import Typewriter from "typewriter-effect";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { Button, Group } from "@mantine/core";
import { IconDownload, IconFileText } from "@tabler/icons-react";
import profile from "../img/01319211609--morshed-.jpg";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false); // Added 'open' to the disclosure hook

  return (
    <>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6"
        id="About"
      >
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1000}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center bs-mx:w-full">
          <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg font-bold tracking-wide">
            Hi, I am
          </div>
          <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px] leading-tight">
            {Info.name}
          </div>
          <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg items-center gap-2">
            I'm a
            <span className="text-primaryColor ml-2">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>
          <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-4 font-medium lg-mx:text-base sm-mx:text-sm xs-mx:text-xs leading-relaxed tracking-wide">
            {Info.bio}
          </div>
          <Group className="xs-mx:w-[90%] flex gap-4 xs-mx:justify-center sm-mx:gap-3">
            <Button
              component="a"
              href="MorshedC.pdf"
              download={Info.name}
              className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-auto"
              size="md" // Standardized size for better consistency
              variant="outline"
              color="#64FFDA"
              leftSection={<IconDownload size={20} />}
            >
              Download Resume
            </Button>
            <Button
              onClick={open} // Added onClick to open the ResumeViewer modal
              className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-auto"
              size="md"
              variant="outline"
              color="#64FFDA"
              leftSection={<IconFileText size={20} />}
            >
              View Resume
            </Button>
          </Group>
        </div>
        <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit bs-mx:mt-8">
          <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              className="w-full h-full rounded-full object-cover border-4 border-primaryColor/30"
              src={profile}
              alt={`Profile picture of ${Info.name}`}
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
