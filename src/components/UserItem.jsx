import React, { useState } from "react";
import axios from "./../api/axios_config";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";

const UserItemed = ({
  id,
  avatar,
  count,
  first_name,
  last_name,
  point_as_staff,
  point,

  email,
}) => {
  const [selected, setSelected] = useState(false);
  const [editPoint, setEditPoint] = useState(false);

  const profile = JSON.parse(localStorage.getItem("profile"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let currentTime = new Date();
  let month = currentTime.getMonth() + 1;

  let year = currentTime.getFullYear();
  const onSubmit = (data) => {
    axios
      .post("/api/v1/points/", {
        value: data.point,
        month: month,
        year: year,
        head: profile.id,
        staff: id,
      })
      .then((res) => {
        console.log(res);
      });
    setSelected(!selected);
  };

  const sendPoint = (data) => {
    editPoint &&
      axios
        .patch(`/api/v1/points/${point_as_staff.id}/`, {
          value: data.edit_point,
        }).then(() => {
            window.location.href = window.location.href;
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    setEditPoint(!editPoint);
  };


  return (
    <tr className=" text-gray-700 dark:text-gray-400 ">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full z-50"
              src={avatar}
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner "
              aria-hidden="true"
            ></div>
          </div>
          {count}

          <div>
            <p className="font-semibold">{first_name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {last_name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">
        {!point_as_staff?.value ? (
          <>
            {!selected ? (
              <button
                className=" bg-cyan-800 rounded-full p-1 text-white text-xs"
                onClick={() => setSelected(!selected)}
              >
                add
              </button>
            ) : null}
            {/* {!editPoint ||  point_as_staff?.value ? (
            <button onClick={() => setEditPoint(!editPoint)} className=" bg-yellow-500 rounded-l-full p-1 text-white text-xs" >
            edits {point_as_staff?.value}
          </button>
          ) : null} */}
          </>
        ) : (
          <>
            {editPoint ? (
              <input
                {...register("edit_point", { required: true })}
                placeholder="напиши очки к зачислению"
                className="bg-cyan-800 rounded-full p-1 text-white text-xs"
                type="number"
                defaultValue={point_as_staff?.value}
              />
            ) : null}

            <button
              onClick={handleSubmit(sendPoint)}
              className=" bg-yellow-500 rounded-full p-1 text-white text-xs"
            >
              edit {point_as_staff?.value}
            </button>
          </>
        )}
        {selected === true ? (
          <>
            <input
              {...register("point", { required: true })}
              placeholder="напиши очки к зачислению"
              className="bg-cyan-800 rounded-full p-1 text-white text-xs"
              type="number"
            />{" "}
            <button onClick={handleSubmit(onSubmit)}>send point</button>
          </>
        ) : (
          ""
        )}{" "}
      </td>
      <td className="px-4 py-3 text-xs">
        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
          {email}
        </span>
      </td>
      <td>
        <Link to={`/user/${id}`}>
          {" "}
          <div className=" text-white text-center  py-1 text-sm  bg-slate-500 rounded-full">
            more
          </div>
        </Link>
      </td>
    </tr>
  );
};
export default UserItemed;
