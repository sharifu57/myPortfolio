import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
  return (
    <div className="container min-h-screen font-['raleway']">
      <a href="/">
        <div className="py-5 flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-700 mr-2 cursor-pointer"
          />
          <p className="text-sm text-gray-700 cursor-pointer font-sem">Back</p>
        </div>
      </a>
      <div>
        <h1 className="text-7xl font-bold text-gray-200">Contact Me.</h1>
      </div>
      
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        Data
      </div>
    </div>
  )
}
