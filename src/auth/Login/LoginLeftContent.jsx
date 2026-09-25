import {
  FaBicycle,
  FaCookie,
  FaQrcode,
  FaStar,
} from "react-icons/fa6";

const lists = [
  {
    id: 1,
    icon: FaCookie,
    color: "bg-dark-yellow/20 text-dark-yellow",
    text: "10 Gursha Points / ETB 100",
    description:
      "Redeem against rare honey tej batches or special communal platters.",
  },
  {
    id: 2,
    icon: FaBicycle,
    color: "bg-green-800/20 text-green-800",
    text: "Free Bole & Kazanchis Delivery",
    description:
      "Priority courier dispatch with heat-insulated clay-stone trays.",
  },
  {
    id: 3,
    icon: FaQrcode,
    color: "bg-brand/20 text-brand",
    text: "Instant Telebirr & CBE Birr",
    description: "Zero-fee instant table settlement and 1-tap reordering.",
  },
];

const LoginLeftContent = () => {
  return (
    <section className="bg-[#FCE3CE] rounded-lg py-10 px-4 lg:px-8 flex flex-col items- gap-4">
      {/*  */}
      <div className="flex items-center gap-2 text-sm text-dark-yellow w-full">
        <FaStar className="text-white bg-dark-yellow  w-6 h-6 rounded-full p-1" />
        <span>MESOB FEAST CIRCLE & PERKS</span>
      </div>

      {/*  */}
      <h1 className=" text-3xl text-brand font-bold">
        A Table shared is a bond celebrated.
      </h1>

      {/*  */}
      <p className=" text-dark-red leading-5 tracking-wide">
        Sign into your culinary sanctuary. Track your seasonal fasting platters,
        express your Jebena preferences, and summon traditional Addis feasts
        straight to your door.
      </p>

      {/* Image */}
      <div className="relative">
        <img
          src="/src/assets/login-hero-image.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <img src="login-bg.png" alt="" className="absolute inset-0 w-full h-full" />
      </div>

      {/*  */}
      <div>
        {lists.map((item) => {
          const { id, icon: Icon, color, text, description } = item;
          return (
            <div
              key={id}
              className="flex items-start gap-4 bg-white px-2 py-3 my-2 rounded"
            >
              <Icon
                className={`${color} text-xl w-12 h-10 py-1 px-2 rounded`}
              />
              <div className="">
                <h2 className="text-xl font-bold">{text}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/*  */}
      <div>
        <p className="italic">
          "The table ordering is as seamless as eating from our grandmother's
          mesob."
        </p>
        <p className="text-dark-yellow">
            DR.SELAMAWIT H. - BOLE MEMBER
        </p>
      </div>
    </section>
  );
};

export default LoginLeftContent;
