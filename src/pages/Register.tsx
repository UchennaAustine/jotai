import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import useMainState from "../global/state";

const Register = () => {
  const [jotai, setJotai] = useMainState();
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const subMission = handleSubmit((data: any) => {
    const { password, email } = data;

    console.log(data);

    setJotai({ password, email });
    navigate("/sign-in");
  });

  console.log("jotai: ", jotai);
  return (
    <div>
      <center>
        <div className="border h-[400px] w-[300px] mt-3 rounded">
          <form
            onSubmit={subMission}
            // className="flex justify-center flex-col  "
          >
            <div className="my-[20px]  h-[40px] w-[150px] bg-slate-500 text-white flex justify-center items-center rounded ">
              Register
            </div>

            <div className="flex flex-col pl-[5px]">
              <label className="text-left text-[14px] ">Email</label>
              <input
                type="text"
                className="border outline-none h-[45px] w-[285px] pl-[5px] rounded placeholder:text-[13px]"
                placeholder="enter your email address"
                {...register("email")}
              />
            </div>

            <div className="flex flex-col pl-[5px] mt-3">
              <label className="text-left text-[14px] ">Password</label>
              <input
                type="password"
                className="border outline-none h-[45px] w-[285px] pl-[5px] rounded placeholder:text-[13px]"
                placeholder="enter your password"
                {...register("password")}
              />
            </div>

            <div className="flex flex-col pl-[5px] mt-3">
              <label className="text-left text-[14px] ">Confirm-Password</label>
              <input
                type="password"
                className="border outline-none h-[45px] w-[285px] pl-[5px] rounded placeholder:text-[13px]"
                placeholder="re-enter your password"
                {...register("confirm")}
              />
            </div>
            <br />
            <button
              type="submit"
              className="h-[40px] w-[100px] bg-slate-500 text-white flex justify-center items-center rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Register;
