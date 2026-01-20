const Mail = () => {
  return (
    <div
      className="
        fixed bottom-32 -right-40
        rotate-90
        hidden md-mx:hidden lg:flex
        items-center gap-8
        font-mono
        text-textColor
        z-20
      "
    >
      {/* Email */}
      <a
        href="mailto:mdarfinji45@gmail.com"
        data-aos="fade-down-left"
        data-aos-duration="800"
        className="
          tracking-widest
          text-sm
          transition-all duration-300
          hover:text-primaryColor
          hover:-translate-x-2
          hover:shadow-[0_0_12px_#64FFDA60]
        "
      >
        mdarfinji45@gmail.com
      </a>

      {/* Divider */}
      <div className="h-[1px] w-40 bg-gradient-to-r from-textColor/80 to-transparent rounded-full" />
    </div>
  );
};

export default Mail;
