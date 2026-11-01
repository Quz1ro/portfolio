export function FigureArt({compact=false}:{compact?:boolean}) {
  const joints:[number,number][]= [
    [150,55],[150,74],[150,92],[128,96],[172,96],[113,116],[187,116],[105,144],[195,144],
    [99,171],[201,171],[132,133],[168,133],[140,166],[160,166],[135,188],[165,188],
    [125,223],[175,223],[120,257],[180,257],[117,294],[183,294]
  ];
  return <div className={`figure-art ${compact?'figure-compact':''}`} aria-hidden="true">
    <svg viewBox="0 0 300 350" role="presentation">
      <defs><linearGradient id="figurestroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eff0f2" stopOpacity=".72"/><stop offset="1" stopColor="#858b98" stopOpacity=".26"/></linearGradient><radialGradient id="figureglow"><stop stopColor="#fff" stopOpacity=".2"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs>
      <circle cx="150" cy="164" r="143" fill="url(#figureglow)"/>
      <g stroke="#777d8a" strokeOpacity=".18" strokeWidth="1">
        {Array.from({length:13},(_,i)=><path key={`v${i}`} d={`M ${30+i*20} 5 V 340`}/>)}
        {Array.from({length:16},(_,i)=><path key={`h${i}`} d={`M 15 ${24+i*20} H 285`}/>)}
      </g>
      <g fill="none" stroke="url(#figurestroke)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M150 55 Q138 47 136 59 Q131 76 145 86 L150 92 L155 86 Q169 76 164 59 Q161 47 150 55Z"/>
        <path d="M150 92 L128 96 L113 116 L105 144 L99 171 M150 92 L172 96 L187 116 L195 144 L201 171"/>
        <path d="M128 96 L132 133 L140 166 L135 188 L125 223 L120 257 L117 294 M172 96 L168 133 L160 166 L165 188 L175 223 L180 257 L183 294"/>
        <path d="M132 133 L168 133 M140 166 L160 166 M135 188 L165 188 M150 92 L150 166"/>
      </g>
      <g fill="#e5e7e9" stroke="#1a1c20" strokeWidth="2">{joints.map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i<3?3.4:3}/>)}</g>
      <g stroke="#dfe1e5" opacity=".45" fill="none"><path d="M70 56h20m-20 0v20M230 56h-20m20 0v20M70 296h20m-20 0v-20M230 296h-20m20 0v-20"/></g>
    </svg>
    <span className="figure-tag figure-tag-top">POSE / 033</span>
    <span className="figure-tag figure-tag-bottom">TRACKING POINTS</span>
  </div>;
}
