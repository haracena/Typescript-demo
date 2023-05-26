import React, { useState } from "react";

export const LoggedIn = () => {
  // type inference -> typescript es capaz de detenerminar el type del useState dependiendo del initial value
  // nos tira error si al setIsLoggedIn le intentamos setear un valor de otro type
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {setIsLoggedIn(true)}
  const handleLogOut = () => {setIsLoggedIn(false)}

  return <div>
    <button onClick={handleLogIn}>Login</button>
    <button onClick={handleLogOut}>Logout</button>
    <div>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
  </div>;
};
