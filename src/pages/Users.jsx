import axios from "./../api/axios_config";
import React, { useEffect, useState } from "react";
import Pagination from "../components/pogination";

import UserItemed from '../components/UserItem'

import DiscordLoader from "../components/Sceleton";
// import { Link } from "react-router-dom";

const UsersItem = () => {

  const { is_superuser } = JSON.parse(localStorage.getItem("profile"));
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");



  const getUsers = async (query) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Token ${token}` },
      params: { search: query },
    };
    try {
      const response = await axios.get(
        "/api/v1/auth/users/?page_size=5&role=is_staff",
        config
      );
      setUsers(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getUsersWithQuery = async () => {
      await getUsers(searchQuery);
    };
    getUsersWithQuery();
  }, [searchQuery]);

  // if(!is_superuser){
  //   navigate('/')
  // }А

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const token = localStorage.getItem("token");
  //     const config = {
  //       headers: { Authorization: `Token ${token}` },
  //     };
  //     try {
  //       const response = await axios.get("/api/v1/auth/users/", config);
  //       setUsers(response.data.results);
  //       console.log(response.data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUsers();
  // }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full p-5">
      <div className="w-full overflow-hidden rounded-lg shadow-xs my-5">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap p-5">
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              {/* <input
                className=" w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input p-3"
                type="text"
                placeholder="Search for projects"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchTermChange}
              /> */}
              <input
                placeholder="поиск...."
                className=" w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input p-3"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </tr>
          </table>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Point</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <>
                {users.length ? (
                  users.map((user) => <UserItemed key={user.id} {...user}  />)
                ) : (
                  <DiscordLoader/>
                )}
              </>
            </tbody>
            
          </table>
        </div>
        <div className=" w-full grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end w-full ">
            <Pagination
              className="flex"
              itemsPerPage={itemsPerPage}
              totalItems={users.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersItem;
