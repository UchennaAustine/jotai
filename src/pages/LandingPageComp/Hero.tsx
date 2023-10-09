import { AiOutlineCheck } from "react-icons/ai";
const Hero = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex  items-center  flex-col">
        <div className="flex items-center flex-col py-[60px] w-full">
          <div className="w-[85%] font-[600] text-[40px] flex justify-center h-[60px]">
            PlanetScale pricing
          </div>
          <div className="h-[20px] w-[85%] flex justify-center pt-[10px] ">
            <div className="h-[20px] text-[12px]">
              Our plans scale with you. All plans include:
            </div>
            <div className="h-[20px] ml-[10px] text-[12px] text-[#1a1a1a] flex items-center">
              <AiOutlineCheck className="text-[#158730]" />
              Daily backups
            </div>
            <div className="h-[20px] ml-[10px] text-[12px] text-[#1a1a1a] flex items-center">
              <AiOutlineCheck className="text-[#158730]" />
              Automatic failover
            </div>
            <div className="h-[20px] ml-[10px] text-[12px] text-[#1a1a1a] flex items-center">
              <AiOutlineCheck className="text-[#158730]" />
              Enterprise-grade security
            </div>
          </div>
        </div>

        {/* main section */}
        <div className="w-[85%] bg-slate-300 h-[600px]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="h-[405px] w-[230px] border border-[black] rounded-tl-md rounded-bl-md"></div>
            <div className="h-[405px] w-[230px] border border-[black]"></div>
            <div className="h-[510px] w-[460px] border border-[black] rounded-md"></div>
            <div className="h-[400px] w-[345px] border border-[black] rounded-tr-md rounded-br-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
