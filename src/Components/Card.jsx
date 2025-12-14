const Card = ({card,onClick}) => {
  return (
    <div 
    className={`card ${card.isFlipped ? "flipped":""} ${card.isMatched ? "matched":""}`}
    onClick={()=>onClick(card)}>
        <div className="card-front bg-linear-to-b from-[#0f172a] to-[#0b0f1a]  text-white font-bold text-5xl border-2 border-white/10 z-1">?</div>
        <div className="card-back bg-[#1e1e1e] text-5xl z-0 border-2 border-white/10">{card.value}</div>
    </div>
  )
}

export default Card