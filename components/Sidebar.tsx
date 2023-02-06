import {
  HiOutlineBell,
  HiOutlineHome,
  HiOutlineHashtag,
  HiOutlineMail,
  HiBookmark,
  HiOutlineUser,
  HiOutlineMenu,
} from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";

import SidebarRow from "./SidebarRow";
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />

      <SidebarRow Icon={HiOutlineHome} title="Home" />
      <SidebarRow Icon={HiOutlineHashtag} title="Explore" />
      <SidebarRow Icon={HiOutlineBell} title="Notifications" />
      <SidebarRow Icon={HiOutlineMail} title="Messages" />
      <SidebarRow Icon={HiBookmark} title="Bookmarks" />
      <SidebarRow Icon={HiOutlineMenu} title="List" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={HiOutlineUser}
        title={session ? "Sign Out" : "Sign In"}
      />
      <SidebarRow Icon={CiCircleMore} title="More" />
    </div>
  );
};

export default Sidebar;
