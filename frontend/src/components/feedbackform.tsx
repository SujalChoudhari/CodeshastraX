"user client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8nfmTIYCl3s
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Feedbackform() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">We value your feedback</h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Please select the type of feedback you would like to provide. Your input helps us improve our services.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="grid grid-cols-3 gap-8">
            <div className="transform rotate-0 transition-transform duration-500 ease-in-out hover:rotate-90">
              <div className="flex items-center justify-center h-24 w-24 rounded-lg bg-green-100 text-green-800">
                <ThumbsUpIcon className="h-12 w-12" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-500">Positive</p>
            </div>
            <div className="transform rotate-0 transition-transform duration-500 ease-in-out hover:rotate-90">
              <div className="flex items-center justify-center h-24 w-24 rounded-lg bg-yellow-100 text-yellow-800">
                <MinusIcon className="h-12 w-12" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-500">Neutral</p>
            </div>
            <div className="transform rotate-0 transition-transform duration-500 ease-in-out hover:rotate-90">
              <div className="flex items-center justify-center h-24 w-24 rounded-lg bg-red-100 text-red-800">
                <ThumbsDownIcon className="h-12 w-12" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-500">Negative</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Your Details</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="customer_name">
              Name
            </label>
            <input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="customer_name"
              name="customer_name"
              type="text"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="comment"
              name="comment"
              rows="3"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
