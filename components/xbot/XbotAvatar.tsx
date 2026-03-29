export function XbotAvatar({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full animate-gradient-rotate"
        style={{
          background: "conic-gradient(from 0deg, #F2C385, #64E3D1, #0A2E38, #F2C385)",
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
      />
      <div className="absolute inset-[2px] rounded-full bg-teal-900 flex items-center justify-center">
        <span className="font-display text-white" style={{ fontSize: size * 0.4 }}>X</span>
      </div>
    </div>
  );
}
