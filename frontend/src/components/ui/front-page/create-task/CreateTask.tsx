import React from 'react'

function CreateTask() {
  return (
    <div className="w-[90%] max-w-[553px] h-[240px] sm:h-[295px] bg-[#101827]/74 dark:bg-[#1F2937] rounded-[52px] sm:rounded-[52px] flex flex-col justify-center items-center px-4">
      {/* Plus Button */}
      <button className="w-[100px] h-[100px] sm:w-[146px] sm:h-[146px] border-2 border-dashed border-white rounded-full flex justify-center items-center mb-4 sm:mb-6 bg-[#1F2937] hover:bg-[#2e3d52] dark:bg-[#0E192E] dark:hover:bg-[#17294a] transition duration-200">
        <span className="text-white text-4xl sm:text-5xl font-light leading-none">+</span>
      </button>

      {/* Text */}
      <p className="text-white text-xl sm:text-3xl font-[Jost] text-center">Create Task</p>
    </div>
  )
}

export default CreateTask
