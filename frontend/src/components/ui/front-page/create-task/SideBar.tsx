import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SideBar() {
  return (
    <div className='fixed md:sticky bottom-0 md:top-0 md:left-0 w-full md:w-auto h-auto md:h-[95vh] bg-white/10 rounded-full flex md:flex-col px-6 py-4'>
      
      <div className="flex flex-row md:flex-col gap-4 w-full h-full justify-between">
        <div className="flex justify-center items-center bg-[var(--custom-gray)] p-4 rounded-full">
          <FontAwesomeIcon icon={faUser} color='black' />
        </div>
        <div className="flex justify-center items-center bg-[var(--custom-gray)] p-4 rounded-full">
          <FontAwesomeIcon icon={faGear} color="black" />
        </div>
      </div>

    </div>
  )
}
