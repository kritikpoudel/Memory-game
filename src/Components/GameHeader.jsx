const GameHeader = ({score,moves,onReset}) => {
  return (
    <div className="flex flex-col items-center gap-5 p-7.5 rounded-3xl bg-slate-900/90 shadow-2xl shadow-black/50 w-full max-w-150 border border-white/10 ">
      <h1 className="text-4xl text-white text-center">🎮 Memory Card Game</h1>
      <div className="flex gap-8 justify-center w-full ">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-base text-gray-400 font-semibold uppercase tracking-wider">
            Score:
          </span>
          <span className="text-3xl font-bold text-blue-500">{score}</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-base text-gray-400 font-semibold uppercase tracking-wider">
            Moves:
          </span>
          <span className="text-3xl font-bold text-blue-500">{moves}</span>
        </div>
      </div>
      <button className="reset-btn text-white py-3 px-7 bg-black text-base font-semibold cursor-pointer rounded-xl  bg-linear-to-br from-[#667eea] to-[#764ba2] border-none shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-shadow duration-200"
      onClick={onReset}> 🔄 New Game </button>
    </div>
  );
};

export default GameHeader;
