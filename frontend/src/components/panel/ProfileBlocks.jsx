import { useDispatch } from "react-redux";
import { Separator } from "../ui/separator";
import { logout } from "@/redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { EditProfile } from "./EditProfile";
import InviteUsers from "./InviteUsers";
import { Dialog, DialogTrigger } from "../ui/dialog";

const ProfileBlocks = ({ calendars }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/authentication");
  };

  return (
    <div className="flex flex-col gap-[15px] p-[10px] rounded-[10px] bg-[#ffffff99]">
      <div className="flex flex-col gap-[10px]">
        <div className="font-semibold mb-[5px]">Settings</div>
        <div className="flex flex-col gap-[10px]">
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-[5px] rounded-[5px] text-[15px] hover:bg-[#00000011] cursor-pointer">
                Edit profile
              </div>
            </DialogTrigger>
            <EditProfile />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-[5px] rounded-[5px] text-[15px] hover:bg-[#00000011] cursor-pointer">
                Invite users
              </div>
            </DialogTrigger>
            <InviteUsers calendars={calendars} />
          </Dialog>
          <Separator className="bg-black opacity-20" />
          <div
            className="p-[5px] rounded-[5px] text-[15px] hover:bg-[#00000011]"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlocks;
