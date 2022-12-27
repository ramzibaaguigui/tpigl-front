const ContactCard = ({ path, address }) => {
  return (
    <div className="flex gap-1 basis-2/3 items-center space-x-1">
      <div className="w-30">
        <img src={path} className="w-full object-contain" alt="path.logo" />
      </div>
      <div className="font-bold">{address}</div>
    </div>
  );
};

export default ContactCard;
