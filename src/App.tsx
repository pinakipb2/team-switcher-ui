import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlinePlus, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { BiExpandVertical } from "react-icons/bi";
import { BsCheckLg, BsSlashLg } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

function App() {
  return (
    <div className="bg-neutral-900 h-screen select-none">
      <div className="flex relative h-[64px] bg-black text-white px-[24px] py-[17px]">
        <div className="flex">
          <img src="/vite.svg" alt="Logo" className="hover:cursor-pointer shrink-0" />
          <BsSlashLg className="-rotate-[20deg] text-white/40 mx-2 shrink-0" size={30} />
          <div className="flex gap-2 justify-center items-center hover:cursor-pointer">
            <img src="/profile.svg" alt="Profile" className="rounded-full h-[30px]" />
            <span className="text-sm font-semibold">pinakipb2</span>
            <span className="text-xs font-semibold bg-neutral-800 text-white/50 px-2 rounded-2xl pt-[1px] pb-[3px]">Hobby</span>
          </div>
          <Menu as="div" className="">
            <div>
              <Menu.Button className="">
                <BiExpandVertical className="shrink-0 hover:bg-neutral-800 px-0.5 py-3 rounded-md ml-2 hover:cursor-pointer h-[140%] -mt-2" size={22} />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-[98px] w-72 rounded-md bg-black !text-white focus:outline-none border-2 border-white/25">
                <div className="flex relative h-[45px]">
                  <AiOutlineSearch className="shrink-0 absolute left-3 top-1/2 translate-y-[-50%]" size={20} />
                  <input type="text" placeholder="Search..." className="w-full px-10 py-2 rounded-t-md bg-black border-b-2 placeholder:text-white/50 outline-none text-sm border-white/25" autoFocus />
                </div>
                <div className="pt-5 pl-5 pb-2 text-xs text-white/40">Personal Account</div>
                <div className="px-3 pb-3">
                  <Menu.Item>
                    <button className="bg-white/10 pl-5 flex w-full items-center px-2 py-2 text-sm font-semibold rounded-md">
                      <div className="flex items-center justify-between w-full pr-2">
                        <div className="flex gap-2 items-center">
                          <img src="/profile.svg" alt="Profile" className="rounded-full h-[24px] shrink-0" />
                          <span>pinakipb2</span>
                        </div>
                        <BsCheckLg className="shrink-0" size={17} />
                      </div>
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className={`${active ? "bg-white/10" : "text-white/50"} pl-5 flex w-full items-center px-2 py-2 text-sm rounded-md`}>
                        <div className="flex items-center gap-1 w-full pr-2">
                          <AiOutlinePlusCircle className="shrink-0 text-blue-500" size={25} />
                          <span className="font-semibold">Create Team</span>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex absolute right-[24px] items-center justify-center gap-3.5">
          <span className="text-white/50 hover:cursor-pointer hover:text-white text-sm hidden sm:block">Feedback</span>
          <span className="text-white/50 hover:cursor-pointer hover:text-white text-sm hidden sm:block">Changelog</span>
          <span className="text-white/50 hover:cursor-pointer hover:text-white text-sm hidden sm:block">Help</span>
          <span className="text-white/50 hover:cursor-pointer hover:text-white text-sm hidden sm:block">Docs</span>
          <FaRegBell className="text-white/50 mx-2 shrink-0 hover:text-white hover:cursor-pointer" size={20} />
          <Menu as="div" className="">
            <div>
              <Menu.Button className="">
                <div className="flex gap-2 justify-center items-center hover:cursor-pointer">
                  <img src="/profile.svg" alt="Profile" className="rounded-full h-[30px] shrink-0" />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-black !text-white focus:outline-none border-2 border-white/25">
                <div className="pt-5 pl-5 pb-2 text-sm text-white/40">pinakipb2@gmail.com</div>
                <div className="">
                  <Menu.Item>
                    <button className="bg-white/10 pl-5 flex w-full items-center px-2 py-2 text-sm">Dashboard</button>
                  </Menu.Item>
                  <Menu.Item>{({ active }) => <button className={`${active ? "bg-white/10" : "text-white/50"} pl-5 flex w-full items-center px-2 py-2 text-sm`}>Settings</button>}</Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className={`${active ? "bg-white/10" : "text-white/50"} pl-5 flex w-full items-center px-2 py-2 text-sm`}>
                        <div className="flex items-center justify-between w-full pr-2">
                          <span>New Team</span>
                          <AiOutlinePlus className="shrink-0" size={17} />
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="flex justify-center items-center">
                  <hr className="border border-white/20 my-2 w-11/12" />
                </div>
                <div className="">
                  <Menu.Item>{({ active }) => <button className={`${active ? "bg-white/10" : "text-white/50"} pl-5 flex w-full items-center px-2 py-2 text-sm`}>Log Out</button>}</Menu.Item>
                </div>
                <div className="flex justify-center items-center">
                  <hr className="border border-white/20 my-2 w-11/12" />
                </div>
                <div className="px-5 py-4">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? "bg-black text-white " : "text-black bg-white"} text-center justify-center  rounded-md flex w-full border items-center px-10 py-2 text-sm font-semibold`}
                      >
                        Upgrade to PRO
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default App;
