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
        <div className="w-[85%] h-[600px]">
          <div className="w-full h-full flex justify-center items-center">
            {/* box 1 */}
            <div className="h-[405px] w-[230px] border border-[silver] rounded-tl-md rounded-bl-md flex flex-col">
              <div className="w-full h-[50%] bg-[#FAFAFA] rounded-tl-md flex flex-col p-[20px]">
                <h3 className="font-[600] text-[14px] text-[#1a1a1a] h-[20px]">
                  Hobby
                </h3>
                <p className="font-[400] text-[12px] text-[#616161] h-[30px] my-[5px]">
                  Free forever for hobby use
                </p>
                <div className="my-[30px] h-[75px]">
                  <span className="font-[600] text-[24px] ">
                    $0
                    <span className="font-[400] text-[12px] text-[#616161] border m-1 px-1 border-[#F35813]">
                      /month
                    </span>
                  </span>
                  <div className="font-[600]  text-[14px] border border-[#F35813] w-[130px] h-[35px] rounded-[20px] flex justify-center items-center ">
                    Sign up
                    <span className="font-[600] ml-1  text-[14px] border px-1 border-[#F35813]">
                      for free
                    </span>
                  </div>
                </div>
              </div>

              <ul className="w-full h-[50%]  flex flex-col items-center font-[400] rounded-bl-md text-[13px] bg-[#FFFFFF] text-[#1a1a1a] pr-[25px]">
                <li className="flex items-center w-[160px]  my-[8px] ">
                  <AiOutlineCheck className="text-[#158730] " />
                  <p className="ml-[10px] ">5 GB storage included</p>
                </li>
                <li className="flex items-center w-[160px] my-[8px]">
                  <AiOutlineCheck className="text-[#158730] " />
                  <p className="ml-[10px] ">1B row reads/ month</p>
                </li>
                <li className="flex items-center w-[160px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />{" "}
                  <p>10M row writes/ month</p>
                </li>
                <li className="flex items-center w-[160px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>1 production branch</p>
                </li>
                <li className="flex items-center w-[160px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>1 development branch</p>
                </li>
              </ul>
            </div>
            {/* box 2 */}
            <div className="h-[405px] w-[230px] border border-[silver]">
              <div className="w-full h-[50%] bg-[#FAFAFA] rounded-tl-md flex flex-col p-[20px]">
                <h3 className="font-[600] text-[14px] text-[#1a1a1a] h-[20px]">
                  Scaler
                </h3>
                <p className="font-[400] text-[12px] text-[#616161] h-[30px] mt-[3px]">
                  Read/write-based billing for lower-traffic applications
                </p>
                <div className="my-[25px] h-[75px]">
                  <span className="font-[600] text-[24px] ">
                    $29
                    <span className="font-[400] text-[12px] text-[#616161] border m-1 px-1 border-[#F35813]">
                      /month
                    </span>
                  </span>
                  <div className="font-[600]  text-[14px] border border-[#F35813] w-[100px] h-[35px] rounded-[20px] flex justify-center items-center ">
                    Get started
                  </div>
                </div>
              </div>

              <ul className="w-full h-[50%]  flex flex-col items-center font-[400] rounded-bl-md text-[13px] bg-[#FFFFFF] text-[#1a1a1a] pr-[25px]">
                <li className="flex items-center w-[160px]  my-[8px] ">
                  <AiOutlineCheck className="text-[#158730] " />
                  <p className="ml-[10px] ">10 GB storage included</p>
                </li>
                <li className="flex items-center w-[160px] my-[8px]">
                  <AiOutlineCheck className="text-[#158730] " />
                  <p className="ml-[10px] ">100B row reads/ month</p>
                </li>
                <li className="flex items-center w-[160px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />{" "}
                  <p>50M row writes/ month</p>
                </li>
                <li className="flex items-center w-[160px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>2 production branches</p>
                </li>
                <li className="flex items-center w-[170px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>5 development branches</p>
                </li>
              </ul>
            </div>
            {/* box 3 */}
            <div className="h-[468px] w-[460px] border border-[silver] rounded-md">
              <div className="w-full h-[55%] bg-[#FAFAFA] rounded-tl-md rounded-tr-md flex flex-col p-[20px]">
                <h3 className="font-[600] text-[14px] text-[#1a1a1a] h-[20px]">
                  Scaler <span className=" text-[#F35813]  ">Pro</span>
                </h3>
                <p className="font-[400] text-[12px] text-[#616161] h-[30px] my-[5px]">
                  Choose the compute and memory resources for your needs
                </p>
                <div className="mt-[15px] h-[55px]">
                  <span className="font-[600] text-[24px] ">
                    Starts at $39
                    <span className="font-[400] text-[12px] text-[#616161]  m-1">
                      /month
                    </span>
                  </span>
                  <div className="h-[24px] w-full relative items-center">
                    <span className="h-[17px] w-[17px] border-[3px] bg-[#F35813] absolute border-white rounded-full cursor-pointer"></span>
                    <span className="bg-gray-300 h-[2px] relative w-full "></span>
                  </div>
                  <div className=" flex items-center mt-1 gap-1.5">
                    <span className="border border-[#F35813] p-[2px]  rounded font-[500] text-[12px] ">
                      PS-10
                    </span>
                    <span className="font-[400] text-[12px] flex ml-[5px]">
                      0.125 vCPU and 1 GB RAM <span>in AWS us-east-1</span>
                    </span>
                  </div>
                  {/* button */}

                  <div className="font-[600] mt-[10px] h-[40px] text-sm  text-[white] gap-sm justify-center items-center text-center bg-[#F35813] w-[108px] rounded-[20px] hover:bg-[black] cursor-pointer duration-300 leading-none flex ">
                    Get started
                  </div>
                </div>
              </div>

              <ul className="w-full h-[45%]  flex flex-col pt-[10px] px-2.5 font-[400] rounded-bl-md rounded-br-md text-[13px] bg-[#FFFFFF] text-[#1a1a1a] pr-[25px]">
                <li className="flex items-center w-[400px] gap-x-md my-[8px] ">
                  <AiOutlineCheck className="text-[#F35813] hover:text-[black]" />
                  <p className="ml-[10px] ">10 GB storage included</p>
                </li>
                <li className="flex items-center w-[400px] gap-x-md my-[8px]">
                  <span className="text-[#F35813] hover:text-[black]">∞</span>
                  <span className="ml-[10px] text-[#F35813] hover:text-[black]">
                    Unlimited
                  </span>
                  <p className=" ml-[3px]"> row reads and writes</p>
                </li>
                <li className="flex items-center w-[400px] gap-x-md  my-[8px]">
                  <AiOutlineCheck className="text-[#F35813] mr-2 hover:text-[black]" />
                  <p>Deployed across 3 availability zones</p>
                </li>
                <li className="flex items-center w-[400px] gap-x-md  my-[8px]">
                  <AiOutlineCheck className="text-[#F35813] mr-2 hover:text-[black]" />
                  <p>
                    1 production branch included with 2 replicas for
                    high-availability
                  </p>
                </li>
                <li className="flex items-center w-[400px] gap-x-md my-[8px]">
                  <AiOutlineCheck className="text-[#F35813] mr-2" />
                  <p>2 development branches included</p>
                </li>
              </ul>
            </div>
            {/* box 4 */}
            <div className="h-[400px] w-[345px] border border-[silver] rounded-tr-md rounded-br-md">
              <div className="w-full h-[50%] bg-[#FFF8F3] rounded-tl-md rounded-tr-md flex flex-col p-[20px]">
                <h3 className="font-[600] text-[14px] text-[#1a1a1a] h-[20px]">
                  Enterprise
                </h3>
                <p className="font-[400] text-[12px] text-[#616161] h-[30px] my-[5px]">
                  Built for the highest performance
                </p>
                <div className="my-[30px] h-[75px]">
                  <span className="font-[600] text-[24px] ">
                    Custom pricing
                  </span>
                  <div className="font-[600]  text-[14px] border border-[#F35813] w-[100px] h-[35px] rounded-[20px] flex justify-center items-center ">
                    Talk to us
                  </div>
                </div>
              </div>

              <ul className="w-full h-[50%]  flex flex-col  font-[400] rounded-bl-md rounded-br-md text-[13px] bg-[#FFFFFF] text-[#1a1a1a]  px-2.5 ">
                <li className="flex items-center w-[300px]  my-[8px] ">
                  <AiOutlineCheck className="text-[#158730] " />
                  <p className="ml-[10px] ">
                    Custom pricing based on usage or resources
                  </p>
                </li>
                <li className="flex items-center w-[300px] my-[8px]">
                  <AiOutlineCheck className="text-[#158730] " />
                  <p className="ml-[10px] ">Custom reads and writes</p>
                </li>
                <li className="flex items-center w-[300px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>Unlimited connections</p>
                </li>
                <li className="flex items-center w-[300px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>Horizontal sharding</p>
                </li>
                <li className="flex items-center w-[300px]  my-[8px]">
                  <AiOutlineCheck className="text-[#158730] mr-2" />
                  <p>
                    Deploy via Multi-tenant, Single-tenant, or in your AWS or
                    GCP account
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="px-[15px]  rounded-3xl border h-9 flex justify-center items-center ">
            Compare all plans options and benefits
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
