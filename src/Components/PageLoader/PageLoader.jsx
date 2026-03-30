const PageLoader = () => {
  return (
    <div className="w-full min-h-screen bg-grey200 flex justify-center items-center pt-20">
      <div
        className="w-12 h-12 rounded-full border-4 border-grey400 border-t-primary500"
        style={{ animation: "spin 0.8s linear infinite" }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default PageLoader;
