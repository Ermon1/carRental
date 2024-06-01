import React from "react";
import { Link } from "react-router-dom";
import Cardata from "../component/Cardata";
import { VscBook } from "react-icons/vsc";
import { getReservation } from "../redux/actions/ReservationAction";
import { useDispatch } from "react-redux";
import { getAllCarInfo } from "../redux/actions/renter";
function AdminDashboard() {
  const dispatch = useDispatch();

  const getAllReservation = () => {
    dispatch(getReservation());
  };

  const getAllRenter = () => {
    dispatch(getAllCarInfo());
  }

  return (
    <div className=" tw-mt-7 tw-flex tw-items-center tw-justify-center">
      <Link
        to="/aprove"
        onClick={getAllReservation}
        className="tw-no-underline tw-flex tw-items-center   tw-bg-black hover:tw-bg-slate-800 tw-rounded-lg tw-justify-center tw-flex-col tw-border tw-w-80 tw-text-center tw-border-slate-900 tw-h-52"
      >
        <VscBook size={72} color="blue" />
        <span className="tw-block tw-text-white tw-text-lg">
          {" "}
          New Reservation request
        </span>
      </Link>
      <Link
        to="/updateaprove"
        onClick={getAllReservation}
        className="tw-no-underline  tw-bg-black tw-flex tw-items-center tw-ml-8   hover:tw-bg-slate-800 tw-rounded-lg tw-justify-center tw-flex-col tw-border tw-w-80 tw-text-center tw-border-slate-900 tw-h-52"
      >
        <VscBook size={72} color="blue" />
        <span className="tw-block tw-text-white tw-text-lg">
          {" "}
          New update request
        </span>
      </Link>
      <Link
        to="/rented"
        onClick={getAllReservation}
        className="tw-no-underline tw-flex tw-items-center tw-ml-8  tw-bg-black hover:tw-bg-slate-800 tw-rounded-lg tw-justify-center tw-flex-col tw-border tw-w-80 tw-text-center tw-border-slate-900 tw-h-52"
      >
        <VscBook size={72} color="blue" />
        <span className="tw-block tw-text-white tw-text-lg">
          {" "}
          Rented request
        </span>
      </Link>
      <Link
        to="/cancel"
        onClick={getAllReservation}
        className="tw-no-underline tw-flex tw-items-center tw-ml-8  tw-bg-black hover:tw-bg-stone-900 tw-rounded-lg tw-justify-center tw-flex-col tw-border tw-w-80 tw-text-center tw-border-slate-900 tw-h-52"
      >
        <VscBook size={72} color="blue" />
        <span className="tw-block tw-text-white tw-text-lg">
          {" "}
          Cancel request
        </span>
      </Link>
      <Link
        to="/aproverenter"
        onClick={getAllRenter}
        className="tw-no-underline  tw-bg-black tw-flex tw-items-center tw-ml-8   hover:tw-bg-slate-800 tw-rounded-lg tw-justify-center tw-flex-col tw-border tw-w-80 tw-text-center tw-border-slate-900 tw-h-52"
      >
        <VscBook size={72} color="blue" />
        <span className="tw-block tw-text-white tw-text-lg">
          {" "}
          New renter request
        </span>
      </Link>
    </div>
  );
}

export default AdminDashboard;
