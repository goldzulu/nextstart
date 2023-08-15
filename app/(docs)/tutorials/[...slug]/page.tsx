import Link from "next/link"
import { notFound } from "next/navigation"
import { allTutorials } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx"
import { DocsPageHeader } from "@/components/page-header"
import { DashboardTableOfContents } from "@/components/toc"
import "@/styles/mdx.css"
import { Metadata } from "next"

import { absoluteUrl } from "@/lib/utils"

interface TutorialPageProps {
  params: {
    slug: string[]
  }
}

async function getTutorialFromParams(params) {
  const slug = params?.slug?.join("/")
  const tutorial = allTutorials.find((tutorial) => tutorial.slugAsParams === slug)

  if (!tutorial) {
    null
  }

  return tutorial
}

export async function generateMetadata({
  params,
}: TutorialPageProps): Promise<Metadata> {
  const tutorial = await getTutorialFromParams(params)

  if (!tutorial) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", tutorial.title)
  ogUrl.searchParams.set("type", "Tutorial")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: tutorial.title,
    description: tutorial.description,
    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
      type: "article",
      url: absoluteUrl(tutorial.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: tutorial.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tutorial.title,
      description: tutorial.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  TutorialPageProps["params"][]
> {
  return allTutorials.map((tutorial) => ({
    slug: tutorial.slugAsParams.split("/"),
  }))
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const tutorial = await getTutorialFromParams(params)

  if (!tutorial) {
    notFound()
  }

  const toc = await getTableOfContents(tutorial.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={tutorial.title} text={tutorial.description} />
        <Mdx code={tutorial.body.code} />
        <hr className="my-4 border-slate-200" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/tutorials"
            className="mb-4 inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all tutorials
          </Link>
        </div>
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
