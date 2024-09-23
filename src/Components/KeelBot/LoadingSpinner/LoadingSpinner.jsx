const LoadingSpinner = () => {
  const bounceAnimation = {
    animation: "bounce 0.6s ease-in-out infinite",
  };

  return (
    <div className="flex justify-start items-center gap-1 py-8 px-6" style={{}}>
      <span
        className="w-2 h-2 bg-primary500 rounded-full"
        style={{ ...bounceAnimation, animationDelay: "0s" }}
      ></span>
      <span
        className="w-2 h-2 bg-primary500 rounded-full"
        style={{ ...bounceAnimation, animationDelay: "0.15s" }}
      ></span>
      <span
        className="w-2 h-2 bg-primary500 rounded-full"
        style={{ ...bounceAnimation, animationDelay: "0.3s" }}
      ></span>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
