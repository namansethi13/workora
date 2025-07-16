import { useEffect, useRef, useState } from 'react'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MenuProps = {
  onClose: () => void
}

export default function Menu({ onClose }: MenuProps) {
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      backdropRef.current &&
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      handleClose()
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-40 flex backdrop-blur-sm cursor-default transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={menuRef}
        className={`rounded-xl p-6 flex bg-custom-gray/50 dark:bg-custom-light-blue/50 flex-col justify-between min-h-[90vh] w-[250px] mt-4 mb-4 ml-4 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}
      >
        {/* Top Buttons */}
        <div className="flex flex-col gap-4">
          <button className="bg-custom-gray w-full text-center p-4 flex items-center justify-center gap-2 hover:bg-[#abaaaa] rounded-full transition cursor-pointer">
            <FontAwesomeIcon icon={faUser} color='black' />
          </button>
          <button className="bg-custom-gray w-full text-center p-4 hover:bg-[#abaaaa] rounded-full transition font-[jost] cursor-pointer text-black">
            Signup
          </button>
          <button className="bg-custom-gray w-full text-center p-4 hover:bg-[#abaaaa] rounded-full transition font-[jost] cursor-pointer text-black">
            Login
          </button>
        </div>

        {/* Bottom Setting Button */}
        <div>
          <button className="bg-custom-gray w-full text-center p-4 hover:bg-[#abaaaa] rounded-full transition font-[jost] cursor-pointer text-black">
            <FontAwesomeIcon icon={faGear} className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
