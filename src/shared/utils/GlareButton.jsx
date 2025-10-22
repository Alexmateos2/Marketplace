import GlareHover from "./GlareHover";

const GlareButton = ({ children, width = "auto", textSize = "text-lg",type="button" }) => {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={500}
      transitionDuration={800}
      playOnce={false}
      width={width}
      height="auto"
      style={{ display: "inline-block" }}
      className="rounded-full"
    >
      <button
        type={type}
        className={`block rounded-full bg-primary px-6 py-3 font-bold  text-white transition hover:bg-primary/90 text-center ${textSize} `}
      >
        {children}
      </button>
    </GlareHover>
  );
};

export default GlareButton;
