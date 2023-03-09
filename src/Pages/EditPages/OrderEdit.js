import React from "react";
import { useParams } from "react-router-dom";
import EmptyScreen from "../../Components/Shared/EmptyScreens/EmptyScreen";

const OrderEdit = () => {
  const { id } = useParams();
  return (
    <section className="mt-10 mr-8  w-full">
      <div className="flex items-center justify-between  bg-secondaryMain text-whiteHigh rounded-t-lg">
        <h2 className="p-4">Edit</h2>
      </div>
      <EmptyScreen></EmptyScreen>
      <button
        className="btn btn-sm normal-case"
        onClick={console.log("editOrder", id)}
      >
        isEditing False
      </button>
    </section>
  );
};

export default OrderEdit;
