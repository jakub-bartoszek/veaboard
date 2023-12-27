export default function Keycap({ sign, size, color, lightColor }) {
 return (
  <div
   style={{
    backgroundColor: color,
    width: size,
    boxShadow: `inset 0 10px 10px 5px #ffffff50, inset 0 0 10px 0.5vw #000000aa, 0 5px 10px 0px black, 0 0 5px 3px ${lightColor}30`
   }}
   className="h-full rounded-[5px] relative transition-all z-2 w-full active:shadow-keycapActive"
  >
   <div
    style={{
     backgroundColor: color,
     boxShadow: `inset 0 -2px 2px 2px #ffffff20, inset 0 2px 5px 2px #00000030, inset 0 0 10px 5px #ffffff15`
    }}
    className="rounded-md h-[90%] w-full absolute left-0 bottom-[25%] border-none outline-none transition-all flex justify-center items-center cursor-pointer z-3 active:bottom-[10%] active:z-0"
   >
    <span
     style={{
      color: lightColor,
      textShadow: `0 0 5px ${lightColor}, 0 0 20px ${lightColor}`
     }}
     className="text-[clamp(0.3rem,_1.3vw,_0.8rem)] font-bold transition-all"
    >
     {sign}
    </span>
   </div>
  </div>
 );
}
