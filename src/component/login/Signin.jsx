import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Show } from "../../redux/ShowManger";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    setEmail("");
    setPassword("");
    e.preventDefault();
    console.log("form submitted");
  };

   return (
    <div className="bg-login-bg w-[100%] height flex justify-center  items-center  bg-no-repeat bg-cover bg-center   ">
      <div className="sm:w-[90%] sm:h-[45%] lg:w-[50%] xl:w-[40%] 2xl:w-[25%] rounded-xl  2xl:w-[30%] h-[30rem] bg-[#08080894]   ">
        <div>
          <form onSubmit={handleSubmit}
            autoComplete="off"
            action=""
            className="flex flex-col w-[100%]  "
          >
          <p className="text-2xl mt-5 textcolor justify-center text-center ">Login</p>
            <label
              className="md:text-xl textcolor md:ml-10 my-[8px] mt-6 2xl:text-xl textcolor ml-14 my-[10px] mt-8"
              htmlFor=""
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className=" bg-transparent border-b-2 w-[85%] m-[auto] textcolor"
              type="email"
              name="email"
            />
            <label
              className="md:text-xl textcolor ml-10 my-[8px] mt-6 2xl:text-xl textcolor my-[10px] ml-14 mt-8"
              htmlFor=""
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className=" m-[auto] bg-transparent border-b-2 w-[85%] m-[auto] textcolor"
              type="password"
              name="password"
            />
            <button className="btn sm:p-2 m-12 " onClick={()=>dispatch(Show(true))}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  
   }

export default Signin;
