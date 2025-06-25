import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ className }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={className}
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          // Disabled all interactive effects
          detect_on: "canvas",
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
          },
          modes: {
            // Empty modes to prevent any interactions
            push: { quantity: 0 },
            repulse: { distance: 0 },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 120, // Reduced link distance
            enable: true,
            opacity: 0.5, // Reduced opacity
            width: 0.8, // Thinner links
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5, // Slower movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Fixed particle count
          },
          opacity: {
            value: 0.3, // More transparent
            random: false,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Smaller particles
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
