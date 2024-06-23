import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Type, isNumeric } from "../util";
import { addEarning, addDeduction } from "../redux/actions/salaryActions";
import { RxCross2 } from "react-icons/rx";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "12px 20px",
    background: "#FFFFFF",
    zIndex: "9999",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};

const EarningModal = ({ isOpen, onRequestClose, type }) => {
  const dispatch = useDispatch();
  const [earning, setEarning] = useState({
    description: "",
    amount: "",
    epf: false,
  });
  const [deduction, setDeduction] = useState({ description: "", amount: "" });

  const handleAdd = useCallback(() => {
    if (isNumeric(earning.amount) || isNumeric(deduction.amount)) {
      if (type === Type.Earnings) {
        dispatch(addEarning(earning));
        setEarning({ description: "", amount: "", epf: false });
      } else {
        dispatch(addDeduction(deduction));
        setDeduction({ description: "", amount: "" });
      }
      onRequestClose();
    }
  }, [dispatch, earning, deduction, type, onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={`Add New ${type}`}
      ariaHideApp={false}
    >
      <div className="flex justify-between">
        <h2 className="mb-2 text-base font-bold">Add New {type}</h2>
        <RxCross2 onClick={onRequestClose} />
      </div>
      <hr className="absolute left-0 right-0 w-full" />
      <div className="mt-6 mb-6 text-sm">
        <label
          className="block mb-1 font-semibold"
          style={{ color: "#00318C" }}
        >
          {`${type} Name`}
        </label>
        <input
          type="text"
          placeholder="Eg: Travel"
          className="block w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded focus:outline-none"
          value={
            type === Type.Earnings ? earning.description : deduction.description
          }
          onChange={(e) => {
            if (type === Type.Earnings)
              setEarning({ ...earning, description: e.target.value });
            else setDeduction({ ...deduction, description: e.target.value });
          }}
        />
      </div>
      <div className="mb-6 text-sm">
        <label
          className="block mb-1 font-semibold"
          style={{ color: "#00318C" }}
        >
          Amount
        </label>
        <input
          type="number"
          placeholder="Eg: 10,000"
          className="block w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded focus:outline-none"
          value={type === Type.Earnings ? earning.amount : deduction.amount}
          onChange={(e) => {
            if (type === Type.Earnings)
              setEarning({ ...earning, amount: parseFloat(e.target.value) });
            else
              setDeduction({
                ...deduction,
                amount: parseFloat(e.target.value),
              });
          }}
        />
      </div>
      {type === Type.Earnings && (
        <label className="block mb-6">
          <input
            type="checkbox"
            checked={earning.epf}
            onChange={(e) => setEarning({ ...earning, epf: e.target.checked })}
          />
          <span className="ml-2 text-sm">EPF/ETF</span>
        </label>
      )}
      <hr className="absolute left-0 right-0 w-full" />
      <div className="flex justify-end pt-2">
        <button
          className="px-4 py-2 mr-2 text-sm font-semibold text-blue-600 rounded hover:bg-gray-100 focus:outline-none"
          onClick={onRequestClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default EarningModal;
