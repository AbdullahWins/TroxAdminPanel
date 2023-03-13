import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DeliveryContext } from "../../Contexts/DeliveryContext/DeliveryProvider";

const DeliveryAddNew = () => {
  const { addOneRider } = useContext(DeliveryContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/deliveryAllDeliveryMan";

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const riderName = form.riderName.value;
    const riderEmail = form.riderEmail.value;
    const riderContact = form.riderContact.value;
    const riderDOB = form.riderDOB.value;
    const riderGender = form.riderGender.value;
    const riderWorkLocation = form.riderWorkLocation.value;
    const riderAddress = form.riderAddress.value;
    const documentsImage = form.documentsImage.files[0];
    const documentsImages = [documentsImage];

    const newRider = {
      rider_name: riderName,
      rider_email: riderEmail,
      rider_contact: riderContact,
      rider_dob: riderDOB,
      rider_gender: riderGender,
      rider_work_location: riderWorkLocation,
      rider_address: riderAddress,
    };
    try {
      addOneRider(newRider, documentsImages);
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="w-full mt-10 mr-8">
      <div className="flex items-center bg-secondaryMain text-whiteHigh rounded-t-lg w-full">
        <h2 className="p-4">Edit</h2>
      </div>
      <div>
        <section className="">
          <p className="text-center text-blackMid py-4 font-semibold text-xl">
            Add a Delivery Man
          </p>
          {/* {riders.map((rider, i) => {
            return rider?.rider_documents?.map((image) => {
              return <img src={image} alt="" />;
            });
          })} */}
          <div className="grid items-center justify-center gap-4">
            <form
              className="flex flex-col w-full items-center justify-center gap-2"
              onSubmit={handleSubmitBtn}
            >
              <div className="flex items-center justify-center gap-1">
                <p className=" w-96 text-end">Name:</p>
                <input
                  required
                  type="text"
                  name="riderName"
                  placeholder="rider's name"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className="w-96 text-end">Email:</p>
                <input
                  required
                  type="email"
                  name="riderEmail"
                  placeholder="rider's email address"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className=" w-96 text-end">Phone&nbsp;No:</p>
                <input
                  required
                  type="text"
                  name="riderContact"
                  placeholder="mobile with country code"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className=" w-96 text-end">Date&nbsp;of&nbsp;Birth:</p>
                <input
                  required
                  type="text"
                  name="riderDOB"
                  placeholder="DD/MM/YYYY"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className=" w-96 text-end">Gender:</p>
                <input
                  required
                  type="text"
                  name="riderGender"
                  placeholder="gender"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className=" w-96 text-end">Work&nbsp;Location:</p>
                <input
                  required
                  type="text"
                  name="riderWorkLocation"
                  placeholder="select one"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className=" w-96 text-end">Present&nbsp;Address:</p>
                <input
                  required
                  type="text"
                  name="riderAddress"
                  placeholder="enter weight in kg"
                  className="input bg-whiteLow border-none focus:outline-none w-96"
                />
              </div>
              <input
                type="file"
                name="documentsImage"
                className="file-input w-full max-w-xs"
              />
              <div className="flex items-center justify-end gap-4">
                <Link to={"/orderspending"}>
                  <label className="btn rounded-full w-36 normal-case bg-whiteHigh text-primaryMain border-primaryMain hover:border-primaryMain hover:bg-whiteHigh">
                    Cancel
                  </label>
                </Link>
                <button className="btn submit rounded-full w-36 normal-case bg-primaryMain border-primaryMain hover:text-primaryMain hover:bg-whiteHigh hover:border-primaryMain">
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DeliveryAddNew;
