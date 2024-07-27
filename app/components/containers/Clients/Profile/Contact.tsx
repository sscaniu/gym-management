import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import TextField from "@/app/components/shared/TextField";

interface ContactType {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

const Contact = () => {
  const [isRequestSent, setIsRequestSent] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<ContactType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => setEditMode(!editMode);

  return (
    <div className="w-full bg-black shadow-sm rounded-sm p-6 pb-9">
      {isRequestSent && (
        <div className="absolute top-14 left-0 right-0 w-full min-h-10 bg-success/50 font-jost font-semibold text-base text-center py-2">
          Success! Updated info request has been sent.
        </div>
      )}
      <div className="flex items-center justify-between pb-4 border-b border-b-white">
        <h2 className="font-rubik font-bold text-2xl">Client Contact Info</h2>
        {!editMode && (
          <Image
            src="/images/dashboard/pen.png"
            width={24}
            height={24}
            alt=""
            className="cursor-pointer"
            onClick={handleToggleEdit}
          />
        )}
      </div>
      <div className="grid gap-10 font-jost text-base pt-8">
        {!editMode ? (
          <>
            <div className="grid gap-4">
              <p>
                <span className="font-bold">First Name: </span>
                <span>{contactInfo.firstname}</span>
              </p>
              <p>
                <span className="font-bold">Last Name: </span>
                <span>{contactInfo.lastname}</span>
              </p>
              <p>
                <span className="font-bold">Email: </span>
                <span>{contactInfo.email}</span>
              </p>
              <p>
                <span className="font-bold">Phone: </span>
                <span>{contactInfo.phone}</span>
              </p>
              <p>
                <span className="font-bold">Address: </span>
                <span>{contactInfo.address}</span>
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                className="w-[267px]"
                color="warning"
                onClick={() => setIsRequestSent(true)}
              >
                Request Updated Info
              </Button>
            </div>
          </>
        ) : (
          <div className="grid gap-12">
            <div className="grid gap-4">
              <TextField
                label="First Name"
                id="firstname"
                name="firstname"
                value={contactInfo.firstname}
                onChange={handleChange}
              />
              <TextField
                label="Last name"
                id="lastname"
                name="lastname"
                value={contactInfo.lastname}
                onChange={handleChange}
              />
              <TextField
                type="email"
                label="Email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                startAdornment="@"
              />
              <TextField
                label="Phone"
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleChange}
                startAdornment={
                  <Image
                    src="/images/icons/phone.png"
                    width={24}
                    height={24}
                    alt="phone"
                  />
                }
              />
              <TextField
                label="street address"
                id="address"
                name="address"
                value={contactInfo.address}
                onChange={handleChange}
              />
              <TextField
                label="city"
                id="city"
                name="city"
                value={contactInfo.city}
                onChange={handleChange}
              />
              <TextField
                label="State"
                id="state"
                name="state"
                value={contactInfo.state}
                onChange={handleChange}
              />
              <TextField
                label="Zip Code"
                id="zipcode"
                name="zipcode"
                value={contactInfo.zipcode}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-12">
              <Button
                color="warning"
                variant="outlined"
                onClick={handleToggleEdit}
                fullWidth
              >
                Cancel
              </Button>
              <Button color="warning" fullWidth onClick={handleToggleEdit}>
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
