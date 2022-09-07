import Image from 'next/image'
import bg from '../public/banner/slide-1.jpg'
export default function Banner() {
    return (
        // <section className=" bg-green-100 text-green-700 bg-opacity-50" style={{backgroundImage: `url(${bg.src})`, width: '1920', height: '800'}}>
        <section className=" bg-green-100 text-green-700">

        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">YAKI GROUP
                <span className="text-orange-600"> <br/> A travel company</span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">If you will never go, you will never know</p>
            <div className="flex flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-green-700 text-green-100">Get started</button>
                <button className="px-8 py-3 m-2 text-lg border rounded text-green-700 border-green-700">Learn more</button>
            </div>
        </div>
    </section>
    )
}