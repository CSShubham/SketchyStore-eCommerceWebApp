import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { updateUserInfo } from "../utils/updateUser"; // Ensure this path is correct

function ProfileForm() {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState({
    line1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (userData) {
      setName(userData.username || "");
      setPhone(userData.phoneNumber || "");
      setAddress(
        userData.address || {
          line1: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
        }
      );
    }
  }, [userData]);

  const handleUpdate = async () => {
    await updateUserInfo({
      username: name,
      phoneNumber: phone,
      address,
    });
    alert("Profile updated!");
  };

  const handleChange = (field, value) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-2 md:p-4 md:pt-0 space-y-4 mb-5 md:mb-0 w-full">
      <div className="flex p-3 md:pt-0">
        <div className="flex md:hidden">
          <button
            className="active:rounded-xl active:text-white active:bg-[#FF735C] text-[#FF735C] bg-white"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={30} />
          </button>
        </div>
        <div className="text-xl md:text-2xl font-semibold">My Details</div>
      </div>

      <div className="flex flex-col-reverse md:flex-wrap-reverse lg:flex-nowrap md:flex-row w-full">
        <div className="flex w-full px-5 flex-col gap-2">
          <label>Name</label>
          <input
            className="border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />

          <label>Email</label>
          <input
            className="border bg-gray-200 rounded p-2"
            disabled
            value={userData?.email || ""}
          />

          <label>Phone</label>
          <input
            className="border rounded p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+123-456-7890"
          />

          <label>Address Line 1</label>
          <input
            className="border rounded p-2"
            value={address.line1}
            onChange={(e) => handleChange("line1", e.target.value)}
            placeholder="123 Street"
          />
          <div className="flex justify-between gap-1">
            <div className="flex flex-col w-1/3">
              <label>City</label>
              <input
                className="border rounded p-2"
                value={address.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="New York"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label>State</label>
              <input
                className="border rounded p-2"
                value={address.state}
                onChange={(e) => handleChange("state", e.target.value)}
                placeholder="NY"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label>Postal Code</label>
              <input
                className="border rounded p-2"
                value={address.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
                placeholder="10001"
              />
            </div>
          </div>
          <label>Country</label>
          <input
            className="border rounded p-2"
            value={address.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="USA"
          />

          <button
            className="bg-green-600 mt-4 w-1/3 text-white px-4 py-2 rounded"
            onClick={handleUpdate}
          >
            Update Changes
          </button>
        </div>

        <div className="flex flex-col items-center md:px-10 md:mx-20 md:mt-5 gap-4 mb-6">
          {currentUser?.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="h-20 w-20 md:h-40 md:w-60 rounded-full"
            />
          ) : (
            <span className="h-20 w-20 md:h-40 md:w-40 bg-gray-400 flex justify-center items-center rounded-full text-white text-xl">
              {name[0] || "U"}
            </span>
          )}
          <span className="text-center text-gray-500 text-lg md:text-xl font-semibold">
            Profile Picture
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
