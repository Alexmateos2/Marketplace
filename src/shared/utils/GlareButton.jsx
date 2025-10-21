import GlareHover from './GlareHover';

const GlareButton = () => {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
      width="auto"
      height="auto"
      style={{ display: 'inline-block' }}
      className="rounded-full"
    >
      <a
        href="#"
        className="block rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90 sm:px-8 sm:py-4 sm:text-base w-full text-center"
        style={{ textDecoration: 'none' }}
      >
        Explore Collections
      </a>
    </GlareHover>
  );
};

export default GlareButton;
