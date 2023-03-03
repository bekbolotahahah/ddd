import axios from "../api/axios_config";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";


import { useParams } from "react-router-dom";
import MoreDataComponent from "../components/MoreDataComponent";

const Morez = () => {

  const [moreData, setMoreData] = useState(null);
  const { id } = useParams();
  const [preview, setPreview] = useState();
  const [editable, setEditable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .patch("/api/v1/auth/profile/", data, {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res.data));
    localStorage.setItem("profile", JSON.stringify(data));

    setEditable(!editable);
  };

  const changeAvatar = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  useEffect(() => {
    axios
      .get(`/api/v1/auth/users/${id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMoreData(res.data);
      });
  }, [id]);

  console.log(moreData);

  if (!moreData) return <div>loading...</div>;
  return <MoreDataComponent {...moreData} />;
};

export default Morez;


