import { jost } from "./font";

export default function Footer() {
  return (
    <footer className={`${jost.className} flex z-50 h-24 text-xs font-medium leading-[relaxed] tracking-[0px] text-white`} >
      <div className="flex h-24 flex-grow flex-col items-center justify-between self-stretch bg-slate-900 px-6 pb-8 pt-6" >
        <div className="flex items-center">
          <span className="text-center">
            {"©2021 GymBuddies, LLC. | All Rights Reserved. | Privacy Policy"}
            <br />
            {'Version 2024.1'}
          </span>
        </div>
      </div>
    </footer>
  );
}