import React from 'react'
import Image from 'next/image'
import Banner from '../public/tour/1.jpg'


const Hire = () => {
  return (
    <div>
      <section className="bg-green-100 text-gray-800 py-5">
      <div className="container mx-auto py-4  space-y-2 text-center">
    <span className="text-xs font-semibold tracking-wider uppercase text-green-700">shortcut to your dream</span>
		<h2 className="text-5xl font-bold text-green-700"><span className="text-orange-600">About</span> Yaki</h2>

	</div>
	<div className="container flex flex-col mx-auto lg:flex-row py-7">
		<div className="w-full lg:w-2/3 items-center">
				<Image src={Banner} alt="" className="rounded-lg shadow-lg bg-orange-500 aspect-video sm:min-h-96" />
        </div>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-orange-600">
				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
			</svg>
			<h2 className="text-3xl font-semibold leading-none text-green-700">Best Facilitate</h2>
			<p className="mt-4 mb-8">Hire the entire lab. Use it the whole day, half a day, several hours a day for as long as needed. Design a course, and let us facilitate it.</p>
			<button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-orange-600 text-green-100">Get start</button>
		</div>
	</div>
</section>
    </div>
  )
}

export default Hire
