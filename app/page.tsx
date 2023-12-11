import Banner from '@/components/Banner'
import Feed from '@/components/Feed'


export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <div className="flex max-w-screen-screen flex-col items-center justify-between p-0 bg-gray-200">
   
        <Banner/>
      
        <Feed/>

    </div>
  )
}
