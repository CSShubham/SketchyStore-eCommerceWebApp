import { ChevronLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

function ProfileForm() {
  const navigate = useNavigate();

  return (
    <div className="p-2 md:p-4 md:pt-0 space-y-4 w-full">
      <div className="flex  p-3 md:pt-0">
        <div className="flex md:hidden">
          <button
            className=" active:rounded-xl active:text-white active:bg-[#FF735C] text-[#FF735C] bg-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            <ChevronLeft
              className="flex justify-center items-center"
              size={30}
            />{" "}
          </button>
        </div>
        <div className="text-xl md:text-2xl font-semibold">My Details</div>
      </div>
      <div className="flex flex-col-reverse md:flex-wrap-reverse lg:flex-nowrap md:flex-row w-full ">
        <div className="flex w-full flex-col gap-2">
          <label>First Name</label>
          <input className="border rounded p-2" placeholder="John" />
          <label>Last Name</label>
          <input className="border rounded p-2" placeholder="Doe" />
          <label>Email</label>
          <input
            className="border rounded p-2"
            placeholder="example@email.com"
          />
          <label>Phone</label>
          <input className="border rounded p-2" placeholder="+123-456-7890" />
          <label>Gender</label>
          <select className="border rounded p-2">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <button className="bg-green-600 w-55 mt-5 md:mt-2 text-white px-4 py-2 rounded">
            Update Changes
          </button>
        </div>
        <div className="flex flex-col  items-center md:px-10 md:mx-20 md:mt-5 gap-4 mb-6">
        <span className=" h-20 w-20 md:w-50 md:h-50 bg-gray-400 justify-center items-center flex rounded-full">
          J
        </span>
        <span className="text-center text-gray-500 text-xl font-semibold">profile picture</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
