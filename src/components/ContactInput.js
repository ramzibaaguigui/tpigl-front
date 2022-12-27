const ContactInput = ({ inputType, inputHolder}) => {
  return (
    <div>
      <input
        requied
        type={inputType}
        placeholder={inputHolder}
        className="ring-1 ring-gray-300 focus:ring-2 focus:ring-theme-orange w-full rounded-sm px-4 py-2 outline-none"
      ></input>
    </div>
  );
};

export default ContactInput;
