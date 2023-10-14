import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/RootLayout'

const inter = Inter({ subsets: ['latin'] })
const dataset = [
        {
            title: 'Dataset 1',
            author: 'Author 1',
            date_updated: '2nd January 2023',
            file_type: 'CSV', 
            size: '3MB',
            usability: '10.0'
        },
        {
            title: 'Dataset 2',
            author: 'Author 2',
            date_updated: '14th October 2021',
            file_type: 'CSV', 
            size: '10MB',
            usability: '7.0'
        },
        {
            title: 'Dataset 3',
            author: 'Author 3',
            date_updated: '30th February 2023',
            file_type: 'CSV', 
            size: '48KB',
            usability: '8.5'
        }
    ]


export default function Dashboard() {
  return (
    <RootLayout>
    {/* heading */}
    <div class="ml-10 mr-10 mt-10 lg:flex lg:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
            <h2 className="mt-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl">Dashboard</h2>
        </div>
    </div>
    

    {/*user profile*/}
    <div className="border-b">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <div className="ml-10 mr-10 justify-center flex items-center gap-x-6">
                <img src='profile.jpg'></img>
            </div>

            <div className="flex items-center gap-x-6">
                <div>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Name</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Add bio</p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Add occupation</p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Add organisation</p>
                  <p className="text-sm leading-6 text-gray-500">Joined 5 months ago</p>
                </div>
            </div>
        </div>
    </div>

    {/* wallet balance */}
    <div className="border-b">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
            </p>
            </a>

            <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
            </a>

            <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Templates{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
            </a>

            <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Deploy{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
            </a>
        </div>
    </div>

  {/* data list and transaction history */}
    <div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <ul role="list" className="px-5 py-4 divide-y divide-gray-100">
                <h2 className={`mb-3 text-2xl font-semibold`}>My Data Sets</h2>
                {dataset.map((data) => (
                    <li key={data.title} className="flex">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{data.title}</p>
                            <div className="grid lg:grid-cols-2">
                                <div>
                                    <p className="truncate text-xs leading-5 text-gray-500">Uploaded by: {data.author}</p>
                                    <p className="truncate text-xs leading-5 text-gray-500">Date uploaded: {data.date_updated}</p>
                                    <p className="truncate text-xs leading-5 text-gray-500">File type: {data.file_type}</p>
                                </div>
                                <div className="px-5">
                                    <p className="truncate text-xs leading-5 text-gray-500">Size: {data.size}</p>
                                    <p className="truncate text-xs leading-5 text-gray-500">Usability: {data.usability}</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    </li>
                ))}
            </ul>
            <ul role="list" className="px-5 py-4 divide-y divide-gray-100">
                <h2 className={`mb-3 text-2xl font-semibold`}>Transaction History</h2>
                {dataset.map((data) => (
                    <li key={data.title} className="flex">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{data.title}</p>
                            <div className="grid lg:grid-cols-2">
                                <div>
                                    <p className="truncate text-xs leading-5 text-gray-500">Uploaded by: {data.author}</p>
                                    <p className="truncate text-xs leading-5 text-gray-500">Date uploaded: {data.date_updated}</p>
                                    <p className="truncate text-xs leading-5 text-gray-500">File type: {data.file_type}</p>
                                </div>
                                <div className="px-5">
                                    <p className="truncate text-xs leading-5 text-gray-500">Size: {data.size}</p>
                                    <p className="truncate text-xs leading-5 text-gray-500">Usability: {data.usability}</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </RootLayout>
  )
}
