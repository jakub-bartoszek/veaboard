export default function Keycap({sign}) {
 return (
  <div className="shadow-keycap h-full w-full bg-[#9f9f9f] rounded-[5px] relative transition-all z-2 active:shadow-keycapActive">
   <div className="rounded-md shadow-keycapTop h-[90%] w-full bg-[#cdcdcd] absolute left-0 bottom-[20%] border-none outline-none transition-all flex justify-center items-center cursor-pointer z-3 active:bottom-[10%] active:z-0">
    <span className="shadow-light text-[#00b3ff] text-[clamp(0.3rem,_1.3vw,_0.8rem)] font-bold transition-all">
     {sign}
    </span>
   </div>
  </div>
 );
}
