import { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactInput from "../components/ContactInput";

// const Contact = () => {
//   const inputTypes = ["text", "email", "number"];
//   const inputHolders = ["Name", "Email", "Number"];
//   const values = [];
//   const contactCards = ["phone", "fax", "email"];
//   const addresses = ["0799371806", "021212121", "ka_feghouli@esi.dz"];
//   const findUsOptions = ["friend", "ad", "social media", "client"];

//   return (
//     <div className="flex h-screen flex-col md:flex-row">
//       <div className="p-[10vw] pb-10 flex flex-col bg-[#8D8080]">
//         <div className="mb-[2vw]">
//           <h1 className="text-[10vw] text-center font-bold">
//             Get in <span className="text-theme-orange">Touch</span>
//           </h1>
//         </div>
//         <div className="w-4/5 ml-auto mr-auto">
//           <p className="text-center mb-5">
//             Pour etre en contact avec nous et pour que vous restez toujours pres
//             de nous, nous vous recommandons d'utiliser un de nos contact
//           </p>
//         </div>
//       </div>
//       <div className="mb-[5vw]">
//         <img
//           src="/contactImage.png"
//           alt="contactImage"
//           className="w-screen h-[600px]"
//         />
//       </div>
//       <div className="flex flex-col ml-auto mr-auto bg-theme-white">
//         {inputHolders.map((holder, i) => (
//           <ContactInput
//             inputType={inputTypes[i]}
//             inputHolder={inputHolders[i]}
//           />
//         ))}
//         <div>
//           <select
//             label="How did you find us?"
//             className="ml-auto max-w-[90vw] w-[75vw] basis-[10vw] border p-2 mb-[3vw] hover:outline-theme-orange"
//           >
//             <option selected>How did you find us?</option>
//             {findUsOptions.map((option) => (
//               <option
//                 className=""
//                 value={option}
//               >
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="ml-auto mr-auto">
//           <button
//             value={"submit"}
//             label="submit"
//             className="w-[20vw] font-bold rounded-lg p-[2vw] bg-theme-orange"
//           >
//             SEND
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col w-2/3 ml-auto mr-auto">
//         <div className="">
//           <ContactCard path="/phone.svg" count="phone" address="0799371806" />
//         </div>
//         <div>
//           <ContactCard path="/fax.svg" count="fax" address="021212121" />
//         </div>
//         <div>
//           <ContactCard
//             path="/email.svg"
//             count="email"
//             address="ka_feghouli@esi.dz"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

const Contact = () => {
  const paths = ["/phone.svg", "/email.svg", "/fax.svg"];
  const addresses = ["0799371806", "ka_feghouli@esi.dz", "021212121"];
  const inputTypes = ["text", "email", "Number"];
  const inputHolders = ["Name", "Email address", "Number"];
  const findUsOptions = ["A friend", "An ad", "Social media"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const usesStatesArray = [[name,setName],[email,setEmail],[phone,setPhone]];
  const [message, setMessage] = useState("");
  const [findUsHow, setFindUsHow] = useState("");
  return (
    <div className="flex h-full w-screen justify-center items-center bg-theme-orange">
      <div className="flex flex-col space-y-8 md:justify-between md:space-x-0 md:space-y-0 md:flex-row md:flex-wrap p-8 rounded-xl shadow-lg font-white">
        <div className="md:basis-1/3 flex flex-col space-y-8">
          <div>
            <h1 className="font-bold text-white text-4xl">Contact Us</h1>
            <p className="text-white pt-2 text-sm">
              Pour etre en contact avec nous et pour que vous restez toujours
              pres de nous, nous vous recommandons d'utiliser un de nos contact
            </p>
          </div>
          <div className="flex flex-col justify-between">
            {paths.map((type, i) => (
              <ContactCard path={paths[i]} address={addresses[i]} />
            ))}
          </div>
        </div>
        <div className="md:basis-7/12 md:pb-5">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <form className="flex flex-col space-y-4">
              {inputTypes.map((type, i) => (
                <ContactInput inputType={type} inputHolder={inputHolders[i]} useStateValue={usesStatesArray[i]}/>
              ))}
              <textarea
                placeholder="Message"
                className="ring-1 ring-gray-300 focus:ring-2
                   focus:ring-theme-orange w-full rounded-sm px-4 py-2 outline-none"
                rows="4"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
              ></textarea>
              <select
                value={findUsHow}
                className="ring-1 ring-gray-300 focus:ring-2
                   focus:ring-theme-orange w-full rounded-sm px-4 py-2 outline-none"
                onChange={(e)=> (e.target.setFindUsHow(e.target.value))}
              >
                <option selected>How did you find us?</option>
                {findUsOptions.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
              <button className="bg-theme-orange inline-block self-end text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                send
              </button>
            </form>
          </div>
        </div>
        <div>
          <img alt="" src="/contactImage.png" className="w-screen" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
