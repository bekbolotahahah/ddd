import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const [moreData, setMoreData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      avatar: data.avatar[0],
      first_name: data.first_name || moreData.first_name,
      last_name: data.last_name || moreData.last_name,
      group: data.group || moreData.group,
      email: data.email || moreData.email,
    };
    console.log(newData);

    axios
      .patch("/api/v1/auth/profile/", newData, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    axios
      .get(`api/v1/auth/profile`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMoreData(res.data);
      });
  }, []);

  return (
    <div className=" w-full text-slate-400 text-xl m-5 h-[100vh]">
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap wrap bg-gray-800 p-6 rounded-lg m-2  items-center"
        >
          <div className="w-52 h-52 m-3">
            <label className="" htmlFor="i">
              <img
                className=""
                //   onMouseOver={() => setActive(true)}
                //   onMouseOut={() => setActive(false)}
                src={moreData?.avatar}
                alt=""
              />
            </label>
            <input
              className=""
              id="i"
              type="file"
              {...register("avatar")}
              hidden
            />
          </div>
          <div className=" bg-gray-800 p-2 rounded m-2 te">
            <div className=" ">
              <div className="">Имя : -</div>
              <div className="">
                <input
                  className=" p-2 text-gray-200 mt-2 bg-gray-500 rounded"
                  {...register("first_name")}
                  type="text"
                  placeholder={moreData?.first_name}
                />
              </div>
            </div>
            <div className="">
              <div className="">Группа:</div>
              <div>{}</div>

              {/* <div className="">{moreData?.group}</div> */}

              <div className="">
                <input
                  className=" p-2 text-gray-200 mt-2 bg-gray-500 rounded"
                  {...register("group")}
                  type="text"
                  placeholder={moreData?.group}
                />
              </div>
            </div>
            {/* <div className="">
              <div className="">Номер телефона:</div>

              <div className="">{moreData?.phone}</div>

              <div className="">
                <input
                  className=" p-2 text-gray-200 mt-2 bg-gray-500 rounded"
                  {...register("phone")}
                  type="text"
                  value={moreData?.phone}
                />
              </div>
            </div> */}
          </div>
          <div className=" bg-gray-800 p-2 rounded m-2 te">
            <div className="">
              <div className="">Фамилия:</div>

              {/* <div className="">{moreData?.last_name}</div> */}

              <div className="">
                <input
                  className=" p-2 text-gray-200 mt-2 bg-gray-500 rounded"
                  {...register("last_name")}
                  type="text"
                  placeholder={moreData?.last_name}
                />
              </div>
            </div>
            <div className="">
              <div className="">Электронная почта:</div>

              {/* <div className="">{moreData?.email}</div> */}

              <div className="">
                <input
                  className=" p-2 text-gray-200 mt-2 bg-gray-500 rounded"
                  {...register("email")}
                  type="text"
                  placeholder={moreData?.email}
                />
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 p-2 rounded m-2 te">
            <div className="">
              <div className="">Баллы:</div>

              <div className="">{moreData?.point}</div>

              {/* <div className="">
                <input
                  className=" p-2 text-gray-200 mt-2 bg-gray-500 rounded"
                  {...register("point")}
                  type="text"
                  defaultValue={moreData?.point}
                />
              </div> */}
            </div>
          </div>
          <div className="my-5">
            <button
              className=" bg-green-600 text-white rounded p-2 mt-2"
              type="submit"
            >
              Применить изменения
            </button>
          </div>
          <div className=" bg-gray-800 p-2 rounded m-2 te"></div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
