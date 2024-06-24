import React,{useState} from "react";
import {Logoutbtn,Logo,Button} from "../index";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false);

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="justify-between px-10 border-b-2 border-black items-center h-[60px] w-[100%] mx-auto flex">
      <div className="h-full w-1/4 flex justify-start items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold max-ml:text-2xl"> BlogCraft </h1>
        </Link>
      </div>
      <div className="flex text-xl gap-5 max-ml:hidden">
        {navItem.map((item) =>
          item.active ? (
            <li
              key={item.name}
              className="list-none"
              onClick={() => navigate(item.slug)}
            >
              <Button
                classname="border-2 border-black max-ml:hidden text-xl font-semibold px-2 py-1 rounded hover:shadow-3xl transition hover:ease-in-out duration-300"
                children={item.name}
              />
            </li>
          ) : null
        )}
        {authStatus && (
          <>
            <li className="list-none ">
              <Logoutbtn />
            </li>
          </>
        )}
      </div>

      <div className="ml:hidden flex items-center">
        <button onClick={() => setisopen(!isopen)} className="text-4xl">
          <i className={`ri-${isopen ? "close" : "menu-3"}-line`}></i>
        </button>
      </div>

      {isopen && (
        <div
          className={`absolute top-16 right-0 rounded w-[100%] bg-white shadow-lg ml:hidden transform transition-transform duration-300 ease-in-out ${
            isopen ? "translate-y-0" : "-translate-y-full"
          } `}
        >
          {navItem.map((item) =>
            item.active ? (
              <li
                key={item.name}
                className="list-none w-full text-center py-2"
                onClick={() => {
                  navigate(item.slug);
                  setisopen(false);
                }}
              >
                <Button
                  classname="border-2 border-black text-xl font-semibold px-2 py-1 rounded hover:shadow-3xl transition hover:ease-in-out duration-300 w-[30%]"
                  children={item.name}
                />
              </li>
            ) : null
          )}
          {authStatus && (
            <>
              <li className="list-none w-full text-center py-2 ">
                <Logoutbtn classname="w-[30%]" />
              </li>
            </>
          )}
        </div>
      )}
    </header>
  );
}