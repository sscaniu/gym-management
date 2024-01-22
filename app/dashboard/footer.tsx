export default function Footer() {
    return (
      <footer className={'font-jost absolute inset-x-0 bottom z-50 flex h-24 text-xs font-medium leading-[normal] tracking-[0px] text-white'} >
        <div className="flex flex-grow flex-col items-center justify-between self-stretch bg-slate-900 px-6 pb-8 pt-6" >
          <div className="flex items-center self-stretch">
            <span>
              {"©2021 GymBuddies, LLC. "}
              <br />
              {" All Rights Reserved. "}
              <br />
              {" Privacy Policy"}
            </span>
          </div>
        </div>
    </footer>
    );
  }