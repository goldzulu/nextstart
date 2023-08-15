import Link from "next/link"
import { allTutorials } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Tutorials",
  description:
    "This section includes includes AI Tutorials.",
}

export default function TutorialsPage() {
  const tutorials = allTutorials
    .filter((tutorial) => tutorial.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.title), new Date(b.title))
    })

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="tutorials"
        text="This section includes AI Tutorials."
      />
      {tutorials?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {tutorials.map((tutorial) => (
            <article
              key={tutorial._id}
              className="group relative rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {tutorial.featured && (
                <span className="absolute top-4 right-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium tracking-tight text-slate-900">
                    {tutorial.title}
                  </h2>
                  {tutorial.description && (
                    <p className="text-slate-700">{tutorial.description}</p>
                  )}
                </div>
                {tutorial.date && (
                  <p className="text-sm text-slate-600">
                    {formatDate(tutorial.date)}
                  </p>
                )}
              </div>
              <Link href={tutorial.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No tutorials published.</p>
      )}
    </div>
  )
}
