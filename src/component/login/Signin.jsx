import React from 'react'

function Signin() {
  return (
     <div className="bg-login-bg w-[100%] height flex justify-center  items-center  bg-no-repeat bg-cover bg-center   ">
        <div className=" rounded-xl  w-[30%] h-[30rem] bg-[#08080894]   ">
        <div>
               <form autocomplete="off" action="" className='flex flex-col w-[100%]  ' >
               <h1 className="text-center textcolor text-4xl mt-8 m-[10px]">Login</h1>
               <label className= " textcolor ml-14 my-[10px] mt-8" htmlFor="">Email</label>
               <input autocomplete="off" className="bg-transparent border-b-2 w-[80%] m-[auto] textcolor" type="email" name="email"/>
               <label className="textcolor my-[10px] ml-14 mt-8" htmlFor="">Password</label>
               <input autocomplete="off" className="bg-transparent border-b-2 w-[80%] m-[auto] textcolor"type="password" name="password"/>
               <button className="btn">Login</button>
               </form>
               </div>
        </div>
     </div>
  )
}

export default Signin