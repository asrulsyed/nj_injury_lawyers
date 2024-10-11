import { useState } from "react";
import { useNavigate } from "react-router";
import { message } from "antd";
import { accident_style } from "@/stack/stack";

const HomeDashboard = () => {

    const [accidentId, setAccidentId] = useState<number>(0);
    const [zipCode, setZipCode] = useState<string>("");
    const navigate = useNavigate();

    const handleZipCodeChange = (e:any) => {
        setZipCode(e.target.value);
    }

    const handleFindLawyer = () => {
        let index = 0;
        for (index = 0; index < zipCode.length; index++) {
            const element = zipCode[index];
            if(element >= "0" && element <= "9")continue;
            else break;
        }
        if(index === zipCode.length && index === 5){
            navigate(`/formInput?accidentId=${accident_style[accidentId].name}&zipCode=${zipCode}`);
        } 
        else message.warning("Please input valid Zip Code") 
    }

    return (
        <>
            <div id="aboutus" className="home-1 pt-16 pb-10 w-full md:min-h-[800px] min-h-[1000px] flex flex-col items-center justify-between text-center">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[white] text-6xl">INJURY LAWYERS</h1>
                    <p className="pt-3 font-bold text-2xl text-[white]">Referral Portal For The Seriously Injured</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[40px] text-[white] mb-5">Free No Cost Consultation</h1>
                    <h2 className="text-[26px] text-[white]">Injured in an Accident? Speak to a top Lawyer today</h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col xl:w-[940px] xl:h-[245px] bg-transparent rounded-[6px] mt-4 gap-5">
                        <h2 className="pl-5 mb-3 text-4xl text-[white]">What's my claim worth?</h2>
                        <div className="w-full grid md:grid-cols-6 grid-cols-3 mx-auto">
                            {
                                accident_style.map((item, index) => {
                                    return <div key={item.name + index} className={`${accidentId === index ? "grayscale-0" : "grayscale"} hover:scale-125 hover:grayscale-0 flex flex-col items-center cursor-pointer`} onClick={() => setAccidentId(index)}>
                                        <img className="w-[70px]" src={`/icons/${item.picture_id}`}></img>
                                        <div className="text-[14px] text-[white]">{item.name}</div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="flex px-5">
                            <select value={accidentId} name="Find Lawyer" id="find_lawyer" className="bg-[white] w-[40%] h-[50px] outline-none rounded-l-[5px] px-2" onChange={(e) => setAccidentId(Number(e.target.value))}>
                                {
                                    accident_style.map((item, index) => {
                                        return <option key={index} value={index}>
                                            {item.name}
                                        </option>
                                    })
                                }
                            </select>
                            <input type="text" placeholder="Enter Zip Code" className="bg-[white] outline-none w-[40%] px-2" value={zipCode} onChange={handleZipCodeChange}></input>
                            <button className="bg-color1 rounded-r-[5px] w-[20%] text-[white]" onClick={handleFindLawyer}>Find Lawyer</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDashboard;