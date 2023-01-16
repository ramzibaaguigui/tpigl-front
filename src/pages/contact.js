
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2wr7lv4', 'template_d397ga9', form.current, 'iEz8qFNNzw2jmFeME')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  const paths = ["/phone.svg", "/email.svg", "/fax.svg"];
  const addresses = ["0799371806", "ka_feghouli@esi.dz", "021212121"];

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

            {/*form start here*/}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <input type="text" name="user_name" placeholder='name' />
            <input type="email" name="user_email" placeholder='email' />
            <textarea name="message" placeholder='message' />
            <input type="submit" value="Send" />
          </form>
           {/*form end here*/}
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