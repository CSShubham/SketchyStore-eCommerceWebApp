const ProfileForm = () => (
  <div className="p-4 space-y-4">
    <div className="flex flex-col gap-2">
      <label>First Name</label>
      <input className="border rounded p-2" placeholder="John" />
      <label>Last Name</label>
      <input className="border rounded p-2" placeholder="Doe" />
      <label>Email</label>
      <input className="border rounded p-2" placeholder="example@email.com" />
      <label>Phone</label>
      <input className="border rounded p-2" placeholder="+123-456-7890" />
      <label>Gender</label>
      <select className="border rounded p-2">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
    <button className="bg-green-600 text-white px-4 py-2 rounded">Update Changes</button>
  </div>
);

export default ProfileForm;