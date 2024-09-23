const LoadingSpinner = () => {
  return (
    <div className="flex justify-start items-center gap-1 py-8 px-6">
      <span className="w-2 h-2 bg-primary500 rounded-full"></span>
      <span className="w-2 h-2 bg-primary500 rounded-full"></span>
      <span className="w-2 h-2 bg-primary500 rounded-full"></span>
    </div>
  );
};

export default LoadingSpinner;
