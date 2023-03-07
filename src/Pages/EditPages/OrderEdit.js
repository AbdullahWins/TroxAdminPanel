import React from "react";
import EmptyScreen from "../../Components/Shared/EmptyScreens/EmptyScreen";

const OrderEdit = ({ setIsEditing }) => {
  const handleEditing = () => {
    setIsEditing(false);
  };
  return (
    <div>
      <EmptyScreen></EmptyScreen>
      <button className="btn btn-sm normal-case" onClick={handleEditing()}>
        isEditing False
      </button>
    </div>
  );
};

export default OrderEdit;
