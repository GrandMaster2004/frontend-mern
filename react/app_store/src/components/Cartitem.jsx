import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Cartitem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Remove");
  };
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <p>{item.price}</p>
        <div onClick={removeFromCart}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
