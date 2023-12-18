export default function Keycap({ sign, size, color, lightColor }) {
 console.log(size);
 return (
  <div
   style={{
    backgroundColor: color,
    width: size,
   }}
   className="h-full rounded-[5px] relative transition-all z-2 w-full shadow-keycap active:shadow-keycapActive"
  >
   <div
    style={{
     backgroundColor: color
    }}
    className="shadow-keycapTop rounded-md h-[90%] w-full absolute left-0 bottom-[25%] border-none outline-none transition-all flex justify-center items-center cursor-pointer z-3 active:bottom-[10%] active:z-0"
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
