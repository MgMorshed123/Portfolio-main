import { Info, socialLinks } from "../User";

const Footer = () => {
  return (
    <footer className="mt-24 mb-10 font-mono flex flex-col items-center gap-6">
      {/* Name */}
      <h2 className="text-3xl md-mx:text-2xl font-semibold text-primaryColor tracking-wide">
        {Info.name}
      </h2>

      {/* Divider */}
      <div className="h-[2px] w-20 rounded-full bg-primaryColor/60 shadow-[0_0_12px_#64FFDA]" />

      {/* Social Icons */}
      <div className="flex gap-8 sm-mx:gap-6">
        {socialLinks.map((socialLink, index) => (
          <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noreferrer"
            className="
              text-textColor
              transition-all duration-300
              hover:text-primaryColor
              hover:scale-110
              hover:shadow-[0_0_12px_#64FFDA80]
            "
          >
            <socialLink.icon stroke={1.5} size={26} />
          </a>
        ))}
      </div>

      {/* Optional small text */}
      <p className="text-xs text-textColor/70 tracking-wider">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
