import { AcademicCapIcon, BookOpenIcon, CurrencyDollarIcon, InformationCircleIcon, PhoneArrowDownLeftIcon, PhoneXMarkIcon, ShoppingCartIcon, TruckIcon } from "@heroicons/react/24/solid";


type FeedsCardProps = {
    title:string,
    text:string,
}

export default function Feeds ({ title, text}:FeedsCardProps)  {

    const iconMap: { [key: string]: JSX.Element } = {
        Delivery: <TruckIcon className="h-10 w-10 text-blue-500 mr-2" />,
        Inventory: <BookOpenIcon className="h-10 w-10 text-green-500 mr-2" />,
        Pricing: <CurrencyDollarIcon className="h-10 w-10 text-yellow-500 mr-2" />,
        Support: <PhoneArrowDownLeftIcon className="h-10 w-10 text-red-500 mr-2" />,
        Experience: <AcademicCapIcon className="h-10 w-10 text-purple-500 mr-2" />,
      };
  return (
    <div className="relative flex m-5 rounded-xl bg-white z-30 p-10">
    <div className="md:flex items-center">
      {iconMap[title]}
      <h4 className="absolute top-2 left-2 text-sm italic">{title}</h4>
    </div>
    <p className="p-2 text-gray-600">{text}</p>
  </div>
  )
}