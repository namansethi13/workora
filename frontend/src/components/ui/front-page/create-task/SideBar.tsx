import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Sidebar() {
  return (
    <div className='fixed md:sticky bottom-0 md:top-0 md:left-0 w-full md:w-auto h-auto md:h-[95vh] bg-white/10 rounded-full flex md:flex-col px-6 py-4 cursor-pointer'>
      
      <div className="flex flex-row md:flex-col gap-4 w-full h-full justify-between">
        <button className="flex justify-center items-center bg-custom-gray p-4 rounded-full cursor-pointer hover:bg-custom-gray-400 transition-all">
          <FontAwesomeIcon icon={faUser} color='black' />
        </button>
        <button className="flex justify-center items-center bg-custom-gray p-4 rounded-full cursor-pointer hover:bg-custom-gray-400 transition-all">
          <FontAwesomeIcon icon={faGear} color="black" />
        </button>
      </div>

    </div>
  )
}
