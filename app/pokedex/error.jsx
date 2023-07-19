"use client";
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid'

const Error = ({ error, reset }) => {
  return (
    <div>
      <ClipboardDocumentListIcon className="w-6 h-6 text-blue-500" />
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default Error;
