import { useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const paths = ["/phone.svg", "/email.svg", "/fax.svg"];
  const addresses = ["0799371806", "ka_feghouli@esi.dz", "021212121"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setEmail('');
          setName('');
      }, (error) => {
          console.log(error.text);
      });
  };
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
              <div className="flex gap-1 basis-2/3 items-center space-x-1">
              <div className="w-30">
                <img src={paths[i]} className="w-full object-contain" alt="path.logo" />
              </div>
              <div className="font-bold">{addresses[i]}</div>
            </div>
            ))}
          </div>
        </div>
        <div className="md:basis-7/12 md:pb-5">
          <div className="bg-white rounded-xl shadow-sm p-8">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="name" value={name}/>
            <input type="email" name="user_email" placeholder="email" value={email}/>
            <textarea name="message" />
            <input type="submit" value="Send" />
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
