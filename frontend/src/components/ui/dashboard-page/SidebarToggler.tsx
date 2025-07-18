import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen : boolean) => void;
}

function SidebarToggler({isOpen, setIsOpen}: Props) {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className='bg-custom-gray rounded-r-xl h-20 flex items-center justify-center hover:bg-custom-gray-400 dark:bg-white/10 m-0'>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>
  )
}

export default SidebarToggler

