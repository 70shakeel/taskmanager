export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          About This Project
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          This is a task management app built with
          Next.js 14, Tailwind CSS, and
          TypeScript.
        </p>
        <p className="mt-2 text-gray-600">
          It&apos;s designed as a portfolio piece
          to showcase modern frontend development
          skills, including:
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
          <li>
            Responsive design for mobile, tablet,
            and desktop
          </li>
          <li>
            Client-side interactivity with React
            Hooks
          </li>
          <li>Drag-and-drop functionality</li>
          <li>
            Data persistence using browser local
            storage
          </li>
          <li>
            Server and Client Components with the
            Next.js App Router
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
          Key Technologies Used
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <li className="rounded-md bg-gray-100 p-4 text-center">
            <p className="font-semibold">
              Next.js
            </p>
            <p className="text-sm text-gray-500">
              15.3.3
            </p>
          </li>
          <li className="rounded-md bg-gray-100 p-4 text-center">
            <p className="font-semibold">React</p>
            <p className="text-sm text-gray-500">
              19.0.0
            </p>
          </li>
          <li className="rounded-md bg-gray-100 p-4 text-center">
            <p className="font-semibold">
              Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">
              4
            </p>
          </li>
          <li className="rounded-md bg-gray-100 p-4 text-center">
            <p className="font-semibold">
              @dnd-kit
            </p>
            <p className="text-sm text-gray-500">
              Core, Sortable
            </p>
          </li>
          <li className="rounded-md bg-gray-100 p-4 text-center">
            <p className="font-semibold">
              TypeScript
            </p>
            <p className="text-sm text-gray-500">
              5
            </p>
          </li>
          <li className="rounded-md bg-gray-100 p-4 text-center">
            <p className="font-semibold">
              Heroicons
            </p>
            <p className="text-sm text-gray-500">
              2.2.0
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
