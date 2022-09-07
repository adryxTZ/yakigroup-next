import React from 'react'
import Image from 'next/image'
import ContImg from '../public/contact.png'

const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-green-100 text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl text-green-700"><span className="text-orange-600">Let`s</span> talk!</h2>
			<div className="text-green-700">We would love to hear from you..!</div>
		</div>
		<Image src={ContImg} alt=""  />
	</div>
	<form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="border border-green-700 w-full p-3 rounded-md bg-green-100 outline-green-700 required" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="border border-green-700  w-full p-3 rounded bg-green-100 required" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded border border-green-700  bg-green-100 required"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-700 text-green-100 required">Send Message</button>
	</form>
</div>
    </div>
  )
}

export default Contact
