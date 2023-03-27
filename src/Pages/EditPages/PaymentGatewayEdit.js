import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { PaymentContext } from "../../Contexts/PaymentContext/PaymentProvider";
import { firebaseFirestore } from "../../Firebase/firebase.config";

const PaymentGatewayEdit = () => {
  const { id } = useParams();
  const { updateSingleGateway } = useContext(PaymentContext);
  const [currentGateway, setCurrentGateway] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/customerAll";

  useEffect(() => {
    const fetchSingleGateway = async () => {
      try {
        const ref = doc(firebaseFirestore, "paymentDetails", id);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          const gateway = docSnap.data();
          return setCurrentGateway(gateway);
        } else {
          console.log("No such doCUMent!");
        }
      } catch (error) {
        console.error("Error fetching doCUMent!", error);
      }
    };
    fetchSingleGateway();
  }, [id]);

  const handleEditBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.gateway_name.value;
    const status = form.gateway_status.value;
    const secretKey = form.gateway_secret_key.value;
    const publicKey = form.gateway_public_key.value;
    const logo = form?.gateway_logo.files;

    const newGateway = {
      gateway_name: name,
      gateway_status: status,
      gateway_secret_key: secretKey,
      gateway_public_key: publicKey,
      // gateway_logo: logo,
    };
    console.log(newGateway);
    updateSingleGateway(newGateway, id, logo);
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <section className="w-full mt-10 mr-8">
      <div className="flex items-center bg-secondaryMain text-whiteHigh rounded-t-lg w-full">
        <p className="font-bold text-2xl pl-4 py-5">Edit</p>
      </div>
      <div>
        <section className="">
          <p className="text-center text-blackMid py-4 font-semibold text-xl">
            Editing the Gateway: {currentGateway?.gateway_name}
          </p>
          <div className="grid items-center justify-center gap-4">
            <form className="flex flex-col gap-4" onSubmit={handleEditBtn}>
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <p className=" w-96 text-end">Payment&nbsp;Method:</p>
                  <input
                    type="text"
                    name="gateway_name"
                    defaultValue={currentGateway?.gateway_name}
                    placeholder="enter full name"
                    className="input bg-whiteHigh border-2 border-blackLow border-opacity-25 focus:outline-none w-96 font-bold"
                  />
                </div>
                <div className="flex items-center justify-center gap-1">
                  <p className=" w-96 text-end">Status:</p>
                  <input
                    type="text"
                    name="gateway_status"
                    defaultValue={currentGateway?.gateway_status}
                    placeholder="rider contact"
                    className="input bg-whiteHigh border-2 border-blackLow border-opacity-25 focus:outline-none w-96 font-bold"
                  />
                </div>
                <div className="flex items-center justify-center gap-1">
                  <p className=" w-96 text-end">Secret&nbsp;Key:</p>
                  <input
                    type="text"
                    name="gateway_secret_key"
                    defaultValue={currentGateway?.gateway_secret_key}
                    placeholder="date of birth"
                    className="input bg-whiteHigh border-2 border-blackLow border-opacity-25 focus:outline-none w-96 font-bold"
                  />
                </div>
                <div className="flex items-center justify-center gap-1">
                  <p className=" w-96 text-end">Publishable&nbsp;Key:</p>
                  <input
                    type="text"
                    name="gateway_public_key"
                    defaultValue={currentGateway?.gateway_public_key}
                    placeholder="gender"
                    className="input bg-whiteHigh border-2 border-blackLow border-opacity-25 focus:outline-none w-96 font-bold"
                  />
                </div>
                <input
                  type="file"
                  name="gateway_logo"
                  className="file-input outline-none w-full max-w-xs my-4 focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-end gap-4">
                <Link to={"/deliveryAllDeliveryMan"}>
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

export default PaymentGatewayEdit;
