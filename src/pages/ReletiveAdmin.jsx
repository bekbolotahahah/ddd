import axios from "../api/axios_config";
import React, { useState, useEffect } from "react";




import MoreDataComponent from "../components/MoreDataComponent";
import { useForm } from "react-hook-form";


const Balanse = () => {
  // const profile = JSON.parse(localStorage.getItem("profile"));
  const [profileData, setProfileData] = useState()

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
  const [preview, setPreview] = useState();

  const changeAvatar = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  useEffect(() => {
    axios.get(`api/v1/auth/profile`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`,
      }
    }).then(res => {
      setProfileData(res.data)
    })
  }, [])



  useEffect(()=>{
    axios.get("/api/v1/points/?staff=13&head=1&use_pagination=false/",{
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`,
      }
    }).then(res =>{
console.log(res);
    })
  })

  return (<>
    <MoreDataComponent {...profileData} isEditable/>
</>
  );
};

export default Balanse;

