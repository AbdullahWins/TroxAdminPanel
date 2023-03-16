import React, { useState } from "react";

const BusinessDeliveryCost = () => {
  const [selectedValue, setSelectedValue] = useState("parcel");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmitBtn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const localBellowOnePrice = form?.localBellowOnePrice.value;
    const localOneToFivePrice = form?.localBellowOnePrice.value;
    const localFiveToTenPrice = form?.localBellowOnePrice.value;
    const domesticBellowOnePrice = form?.domesticBellowOnePrice.value;
    const domesticOneToFivePrice = form?.domesticBellowOnePrice.value;
    const domesticFiveToTenPrice = form?.domesticBellowOnePrice.value;
    const internationalBellowOnePrice = form?.internationalBellowOnePrice.value;
    const internationalOneToFivePrice = form?.internationalBellowOnePrice.value;
    const internationalFiveToTenPrice = form?.internationalBellowOnePrice.value;
    const packageType = selectedValue;

    const DeliveryCost = {
      local_bellow_one: localBellowOnePrice,
      local_one_to_five: localOneToFivePrice,
      local_five_to_ten: localFiveToTenPrice,
      domestic_bellow_one: domesticBellowOnePrice,
      domestic_one_to_five: domesticOneToFivePrice,
      domestic_five_to_ten: domesticFiveToTenPrice,
      international_bellow_one: internationalBellowOnePrice,
      international_one_to_five: internationalOneToFivePrice,
      international_five_to_ten: internationalFiveToTenPrice,
      package_type: packageType,
    };
    try {
      // addOneRider(newRider, documentsImages);
      console.log(DeliveryCost);
      setTimeout(() => {}, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full mt-10 mr-8">
      <section className=" bg-whiteHigh rounded-b-xl">
        <div className="flex items-center bg-secondaryMain text-whiteHigh rounded-t-lg w-full">
          <h2 className="font-bold text-2xl pl-4 py-6">Business Setup</h2>
        </div>
        <div>
          <section className="">
            <div className="">
              <form
                onSubmit={handleSubmitBtn}
                className="flex flex-col w-full items-center justify-center gap-2"
              >
                {/* type toggler */}
                <div className="py-4 flex items-center justify-center">
                  <div>
                    <label className="label cursor-pointer">
                      <span
                        className={`label-text ${
                          selectedValue === "parcel"
                            ? "bg-pureBlackColor text-whiteHigh"
                            : "text-pureBlackColor bg-whiteHigh"
                        } px-4 py-2 rounded-full`}
                      >
                        Parcel
                      </span>
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio hidden"
                        value="parcel"
                        checked={selectedValue === "parcel"}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span
                        className={`label-text ${
                          selectedValue === "document"
                            ? "bg-pureBlackColor text-whiteHigh"
                            : "text-pureBlackColor bg-whiteHigh"
                        } px-4 py-2 rounded-full`}
                      >
                        Document
                      </span>
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio hidden"
                        value="document"
                        checked={selectedValue === "document"}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                {/* 3 types based on location */}
                <section className="flex items-center justify-evenly w-full">
                  {/* local */}
                  <div>
                    <p className="text-2xl py-4 text-blackHigh text-center font-bold">
                      Local
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">Bellow&nbsp;1KG:</p>
                        <input
                          required
                          type="number"
                          name="localBellowOnePrice"
                          placeholder="$15.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">1-5KG:</p>
                        <input
                          required
                          type="number"
                          name="localOneToFivePrice"
                          placeholder="$25:00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">5-10KG:</p>
                        <input
                          required
                          type="number"
                          name="localFiveToTenPrice"
                          placeholder="$50.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                    </div>
                  </div>
                  {/* domestic */}
                  <div>
                    <p className="text-2xl py-4 text-blackHigh text-center font-bold">
                      Domestic
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">Bellow&nbsp;1KG:</p>
                        <input
                          required
                          type="number"
                          name="domesticBellowOnePrice"
                          placeholder="$20.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">1-5KG:</p>
                        <input
                          required
                          type="number"
                          name="domesticOneToFivePrice"
                          placeholder="$30.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">5-10KG:</p>
                        <input
                          required
                          type="number"
                          name="domesticFiveToTenPrice"
                          placeholder="$60.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                    </div>
                  </div>
                  {/* international */}
                  <div>
                    <p className="text-2xl py-4 text-blackHigh text-center font-bold">
                      International
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">Bellow&nbsp;1KG:</p>
                        <input
                          required
                          type="number"
                          name="internationalBellowOnePrice"
                          placeholder="$40.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">1-5KG:</p>
                        <input
                          required
                          type="number"
                          name="internationalOneToFivePrice"
                          placeholder="$60.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className=" w-24 text-end">5-10KG:</p>
                        <input
                          required
                          type="number"
                          name="internationalFiveToTenPrice"
                          placeholder="$120.00"
                          className="input border-2 border-blackLow border-opacity-20 p-1 focus:outline-none w-24 text-right"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                {/* action buttons */}
                <div className="flex items-center justify-end gap-4 py-8">
                  <label className="btn rounded-full w-36 normal-case bg-whiteHigh text-primaryMain border-primaryMain hover:border-primaryMain hover:bg-whiteHigh">
                    Cancel
                  </label>
                  <button className="btn submit rounded-full w-36 normal-case bg-primaryMain border-primaryMain hover:text-primaryMain hover:bg-whiteHigh hover:border-primaryMain">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default BusinessDeliveryCost;
