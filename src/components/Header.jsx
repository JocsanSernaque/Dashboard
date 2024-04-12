import Menu from "../assets/images/bx-menu-alt-left.svg";
import Moon from "../assets/images/moon-solid.svg";
import Lupa from "../assets/images/magnifying.svg";
import Bell from "../assets/images/bell-regular.svg";
import User from "../assets/images/user.jpg";

export function Header() {
  return (
    <header className="flex place-content-between  items-center h-20">
      <div>
        <img src={Menu} />
      </div>
      <div className="flex w-[160px] place-content-around items-center gap-1">
        <div className="flex place-content-center items-center w-10 h-10 rounded-lg border border-slate-200 ">
          <img src={Moon} className="w-6 h-6 " />
        </div>
        <div className="flex place-content-center items-center w-10 h-10 rounded-lg border border-slate-200 ">
          <img src={Lupa} className="w-6 h-6 " />
        </div>
        <div className="flex place-content-center items-center w-10 h-10 rounded-lg border border-slate-200">
          <img src={Bell} className="w-6 h-6 " />
        </div>
        <img src={User} className="w-10 h-10 rounded-lg  " />
      </div>
    </header>
  );
}
