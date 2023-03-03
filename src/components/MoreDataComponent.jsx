import axios  from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const MoreDataComponent = ({
  id,
  first_name,
  last_name,
  get_full_name,
  points_as_staff,
  last_login,
  is_superuser,
  is_staff,
  is_active,
  date_joined,
  created_at,
  updated_at,
  avatar,
  phone,
  email,
  role,
  last_activity,
  group,
  groups,
  user_permissions,
  isEditable,
  value,
}) => {
  const navigate = useNavigate();
  const [point, setPoint] = useState([]);
  const profile = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    axios
      .get(
        `http://85.193.91.49/api/v1/points/?staff=${id}&head=${profile.id}&use_pagination=false`
      )
      .then((res) => {
        setPoint(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div className="">
      <div className=" text-slate-400 text-xl m-5 h-[100vh]">
        <div className="">
          <div className="flex flex-wrap wrap bg-gray-800 p-2 rounded-lg m-2  max-sm:text-xs max-sm:justify-center  text-center">
            <div className="w-52 h-52 m-3">
              <div className=" rounded-full" htmlFor="i">
                <img className=" rounded-full" src={avatar} alt="" />
              </div>
            </div>{" "}
            <div>
              <div className="bg-gray-800 p-2 rounded m-2">
                <div>имя:</div>
                <div className=" text-slate-100">{first_name}</div>
              </div>
              <div className="bg-gray-800 p-2 rounded m-2">
                <div>фамилия:{last_name}</div>
                <div className=" text-slate-100">{last_name}</div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 p-2 rounded m-2">
                <div>группа:</div>
                <div className=" text-slate-100">{group}</div>
              </div>
              <div className="bg-gray-800 p-2 rounded m-2">
                <div>email:</div>
                <div className=" text-slate-100">{phone}</div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 p-2 rounded m-2">
                {isEditable && (
                  <button
                    className="  bg-slate-500 p-3 rounded-lg text-slate-50"
                    onClick={() => navigate("/edit-profile")}
                  >
                    change profile
                  </button>
                )}
              </div>
              <div className="bg-gray-800 p-2 rounded m-2">
              
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md mx-2 overflow-x-auto ">
          <table className=" w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Point</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y rounded dark:divide-gray-700 dark:bg-gray-800">
              <>
                {point.length ? (
                  point.map((pi) => (
                    <tr
                      key={pi.id}
                      className=" text-gray-700 dark:text-gray-400 "
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative  w-8 h-8 mr-3 rounded-full md:block">
                            {pi.value}
                            <div
                              className="absolute inset-0 rounded-full shadow-inner "
                              aria-hidden="true"
                            ></div>
                          </div>

                          <div>
                            <p className="font-semibold"></p>
                            <p className="text-xs text-gray-600 dark:text-gray-400"></p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{pi.month} </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          {pi.year}
                        </span>
                      </td>
                      <td>
                        <div className="  text-center  py-1 text-sm  rounded-full">
                          {pi.get_full_name}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                 <Loading/>
                )}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MoreDataComponent;
