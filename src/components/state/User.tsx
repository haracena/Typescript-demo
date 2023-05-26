import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // usualmente nuestro estado puede ser un objeto o null, debemos indicar su type al useState<>
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogIn = () => {
    setUser({ name: "Hugo", email: "harac@gmail.com" });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {/* al tipear user.name se agrega el ? automaticamente, ya que ts detecta que podría ser null */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
