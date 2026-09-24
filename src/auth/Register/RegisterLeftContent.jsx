import { FaAward, FaBell, FaBicycle, FaChair, FaStar, FaWineGlass } from "react-icons/fa6";

const lists = [
  {
    id: 1,
    icon: FaAward,
    color: "bg-green-800/20 text-green-800",
    text: "Communal Gursha Points",
    description: "Earn generous loyalty points redeemable for hand-poured pure Teff injera, prime Siga Tibs, and bespoke banquet upgrades.",
  },
  {
    id: 2,
    icon: FaBell,
    color: "bg-blue-800/20 text-blue-800",
    text: "Fasting Calendar Alerts",
    description: "Timely seasonal notifications for Tsom fasting periods, Chef's Bayaynetu spreads, and lenten specialties.",
  },
  {
    id: 3,
    icon: FaBicycle,
    color: "bg-dark-yellow/20 text-dark-yellow",
    text: "Express Addis Delivery",
    description: "Save Bole, Kazanchis, Old Airport, or Sarbet drop-offs for fast clay-pot temperature delivery straight to your doorstep.",
  },
  {
    id: 4,
    icon: FaChair,
    color: "bg-brand/20 text-brand",
    text: "Priority Mesob Table Reservations",
    description: "Skip standard waitlists for weekend live Kirar acoustic sets and evening green-coffee roasting ceremonies.",
  },
];

const RegisterLeftContent = () => {
  return (
    <section className="bg-[#FCE3CE] rounded-lg py-10 px-4 lg:px-8 flex flex-col items- gap-4">
      {/*  */}
      <div className="flex items-center gap-2 text-sm text-dark-yellow w-full">
        <FaStar className="text-white bg-dark-yellow  w-6 h-6 rounded-full p-1" />
        <span>MESOB CIRCLE</span>
      </div>
      {/*  */}
      <h1 className=" text-3xl text-brand font-bold">
        Become an Honored Table Guest
      </h1>
      {/*  */}
      <p className=" text-dark-red leading-5 tracking-wide">
        Immerse yourself in authentic highland hospitality, where every shared
        meal honors community, connection, and craft.
      </p>
      {/*  */}
      <div className="flex items-start gap-4 bg-white px-2 py-3 my-2 rounded">
        <FaWineGlass className="text-xl text-brand bg-brand/20 w-12 h-10 py-1 px-2 rounded" />
        <div className="">
          <h2 className="text-xl font-bold">Welcome Gift: Pure Tej or Buna</h2>
          <p>
            Enjoy a complimentary flask of house-fermented Tej (pure honey wine)
            or a personalized Jebena Buna coffee ceremony with your inaugural
            banquet booking.
          </p>
        </div>
      </div>
      {/*  */}
      <div>
        {lists.map((item) => {
          const { id, icon: Icon, color, text, description } = item;
          return (
            <div
              key={id}
              className="flex items-start gap-4 px-2 py-3 my-2 rounded "
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
    </section>
  );
};

export default RegisterLeftContent;
