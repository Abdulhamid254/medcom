import { TruckIcon, BookOpenIcon,PhoneXMarkIcon,CurrencyDollarIcon,CalendarIcon } from '@heroicons/react/24/solid'
import Feeds from './Feeds';



 type FeedeX = {
    
    title: string;
    text:string;
 };

type Props = {}

const feedexs: FeedeX[] = [
    {
  
       title:"Delivery",
       text:"Prompt delivery and Installation",
    },
    {
        
        title:"Inventory",
        text:"Wide range of local inventory",
     },
     {
      
        title:"Pricing",
        text:"Internationally competitive pricing",
     },
     {
        
        title:"Support",
        text:"Comprehensive after-sales support",
     },
     {
      
        title:"Experience",
        text:"We have Over 25 years of Experience",
     },
]

export default function Feed ({}:Props) {
  return (
    <div className='md:grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5'>
      {feedexs.map((feed,index) => (
         <Feeds 
          key={index}
        //   icon={feed.icon}
          title={feed.title}
          text={feed.text}
          />
      ))}
    </div>
  )
}