import React from 'react'
import Image from 'next/image'
import kikuletwa from '../public/destinatiions/Kikuletwa_Hotsprings.jpg'
import machame from '../public/destinatiions/machame.jpg'
import masai from '../public/destinatiions/Olpopongi_-_Maasai_Cultural_Village__Museum.jpg'
import kilimanjaro from '../public/destinatiions/Sunrise-Mount-Kilimanjaro-Tanzania.jpg'

const Tours = () => {
  return (
    <div>
        <section className="py-6 sm:py-12 bg-green-100 text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-green-700">A place to relax</span>
		<h2 className="text-5xl font-bold text-green-700"><span className="text-orange-600">Our</span> Tours</h2>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="shadow flex flex-col bg-green-100 rounded">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="" className="object-cover w-full h-52 bg-green-700" src={machame} height={400} width={500} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase font-semibold text-orange-600">Machame</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-green-700">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="shadow flex flex-col bg-green-100 rounded">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <Image alt="" className="object-cover w-full h-52 bg-green-700" src={kikuletwa} height={400} width={500} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase font-semibold text-orange-600">kikuletwa</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-green-700">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="shadow flex flex-col bg-green-100 rounded">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <Image alt="" className="object-cover w-full h-52 bg-green-700" src={kilimanjaro} height={400} width={500} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase font-semibold text-orange-600">mt kilimanjaro</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-green-700">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="shadow flex flex-col bg-green-100 rounded">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <Image alt="" className="object-cover w-full h-52 bg-green-700" src={masai} height={400} width={500} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase font-semibold text-orange-600">olpopongi</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-green-700">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
    </div>
  )
}

export default Tours