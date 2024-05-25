const Cards = () => {
  return (
    <div>
      <div className="bg-orange-300 flex items-center justify-center pt-10 pb-10 text-8xl font-bold">
        Text
      </div>
      <div className="w-screen p-4 bg-slate-100">
        <div className="flex justify-between">
          <div className="bg-white h-[20rem] rounded-lg shadow-lg flex-1 mx-2">
            <h3 className="text-xl font-bold mb-2">Card 1</h3>
          </div>
          <div className="bg-white h-[20rem] rounded-lg shadow-lg flex-1 mx-2">
            <h3 className="text-xl font-bold mb-2">Card 2</h3>
          </div>
          <div className="bg-white h-[20rem] rounded-lg shadow-lg flex-1 mx-2">
            <h3 className="text-xl font-bold mb-2">Card 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
