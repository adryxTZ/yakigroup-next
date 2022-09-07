import React from 'react'

const Features = () => {
  return (
    <section className=" bg-green-100 text-gray-800">
	<div className="container mx-auto py-4  space-y-2 text-center">
    <span className="text-xs font-semibold tracking-wider uppercase text-green-700">shortcut to your dream</span>
		<h2 className="text-5xl font-bold text-green-700"><span className="text-orange-600">Our</span> Features</h2>

	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="shadow flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-green-700">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Our Computers</h3>
			<div className="space-y-1 leading-tight text-justify">
				<p>It is a spacious, comfortable air-controlled computer lab with latest computers and training facilities. It has fast fiber Internet.</p>
				<p>It is a spacious, comfortable air-controlled computer lab with latest computers and training facilities. It has fast fiber Internet.</p>

			</div>
		</div>
		<div className="shadow flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-green-700">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Our Constructors</h3>
			<div className="space-y-1 leading-tight text-justify">
				<p>All our instructor led courses are conducted by instructors who are experts in their respective specialities.</p>
				<p>It is a spacious, comfortable air-controlled computer lab with latest computers and training facilities. It has fast fiber Internet.</p>

			</div>
		</div>
		<div className="shadow flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-green-700">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Our Techinologies</h3>
			<div className="space-y-1 leading-tight text-justify">
				<p>We are located at NIC Investment House, Ground Floor, Wing A (Kitega Uchumi), Samora/Mirambo – in the heart of the City of Dar es Salaam.</p>
				<p>It is a spacious, comfortable air-controlled computer lab with latest computers and training facilities. It has fast fiber Internet.</p>

			</div>
		</div>
		



	</div>
</section>
  )
}

export default Features
