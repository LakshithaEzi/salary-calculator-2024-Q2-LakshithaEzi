import React from "react";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const RecordItem = ({ index, data, onEdit, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row mb-2">
      <div className="flex items-center text-base">
        <span>
          {data.description}: {data.amount.toFixed(2)}
        </span>
        {data.epf && (
          <span className="flex items-center ml-2 text-xs">
            <span className="mr-1 text-blue-600">✔</span>
            <span>EPF/ETF</span>
          </span>
        )}{" "}
        <span className="h-6 mx-4 border-l border-gray-300"></span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onEdit}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <MdModeEdit />
        </button>
        <button
          onClick={() => {
            dispatch(onDelete(index));
          }}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default RecordItem;
