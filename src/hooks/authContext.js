import React from "react";

const AuthContext = React.createContext({ authStatus: false, data: null });
export default AuthContext;
