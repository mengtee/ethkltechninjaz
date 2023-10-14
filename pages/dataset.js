

//import Image from 'next/image'
import YourImage from 'public/dataset.png';
import { Inter } from 'next/font/google';
import RootLayout from '@/components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Dataset() {
  return (
    <RootLayout>
    <main className={`flex min-h-screen flex-col justify-between ${inter.className}`}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto -mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
                <h2 className="mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Dataset
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                    Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.
                </p>
                <button className="mt-5 bg-black text-white font-bold py-2 px-4 rounded">+ New Dataset</button>
            </div>
            <div className="flex justify-center">
              <img
                src="/dataset.png"
                alt="dataset illustration"
                className="w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[25rem] md:-ml-0 lg:-ml-0"
                width={200}
                height={100}
              />
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between border border-gray-300 p-4 rounded-md pb-10 ">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Social science
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Worldwide Population Data
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">                  
                  This Dataset provides comprehensive demographic information on global populations from 1950 to the present. It offers insights into various aspects of population dynamics...
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Author"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
              <button className="mt-10 bg-black text-white font-bold py-2 px-4 rounded self-center">Buy Now</button>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between border border-gray-300 p-4 rounded-md pb-10 ">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Oct 20, 2021
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Retail and Shopping
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Wholesale & Retail Orders Dataset
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Dataset containing five years of customer orders, resulting in thousands of products sold. The records comprise requests from 2017 to 2021. The data.. 
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Author"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
              <button className="mt-10 bg-black text-white font-bold py-2 px-4 rounded self-center">Buy Now</button>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between border border-gray-300 p-4 rounded-md pb-10 ">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Apr 5, 2022
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Finance
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    High-fidelity Fraudulent Activity Dataset
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                The credit card dataset comprises various attributes that capture essential information about individual transactions. Each entry in the dataset is uniquely...
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Author"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
              <button className="mt-10 bg-black text-white font-bold py-2 px-4 rounded self-center">Buy Now</button>
            </article>


          </div>
        </div>
      </div>
    </main>
    </RootLayout>
  );
}
