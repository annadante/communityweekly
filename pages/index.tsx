export default function Home() {
  return(
    
<div className="community-main-container grid gap-10 grid-cols-2">
  <div className="flex flex-col">
    <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
      <h1 className="text-5xl font-bold">Community Weekly</h1>
      <p>A curated newsletter with news, tools & researches sent out weekly to make your community better. For online creators striving to stay independent.</p>
      <ul className="list-disc space-y-2">
        <li className="flex items-start">
          <span className="h-6 flex items-center sm:h-7">
            <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p className="ml-2">
            Customizing your
            <code className="text-sm font-bold text-indigo-500"> tailwind.config.js</code> file
          </p>
        </li>
        <li className="flex items-start">
          <span className="h-6 flex items-center sm:h-7">
            <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p className="ml-2">
            Extracting classes with
            <code className="text-sm font-bold text-gray-900">@apply</code>
          </p>
        </li>
        <li className="flex items-start">
          <span className="h-6 flex items-center sm:h-7">
            <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p className="ml-2">Code completion with instant preview</p>
        </li>
      </ul>
    </div>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-indigo-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        I'm in!
      </button>
    </div>
    </form>
  </div>
  <div className="relative sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div className="divide-y divide-gray-200">
          <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>Want to dig deeper into Tailwind?</p>
            <p>
              <a href="https://tailwindcss.com/docs" className="text-indigo-600 hover:text-indigo-700"> Read the docs &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}