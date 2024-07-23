import { useState } from "react";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

import { CiUser} from "react-icons/ci";
import { TbPasswordUser } from "react-icons/tb";

function App() {
  const [Form, setForm] = useState("login"); 

 return (
 <>
 {Form === "login" ? (
  <SignIn CiUser={CiUser} TbPasswordUser={TbPasswordUser} FormHandle={setForm} />
):(
<Signup CiUser={CiUser} TbPasswordUser={TbPasswordUser} FormHandle={setForm} />
)}
 </>)


  //return <Signup CiUser={CiUser} TbPasswordUser={TbPasswordUser} />;
  //return <Signup CiUser={CiUser} TbPasswordUser={TbPasswordUser} />;

}

export default App