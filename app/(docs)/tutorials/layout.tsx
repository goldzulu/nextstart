interface TutorialsLayoutProps {
  children: React.ReactNode
}

export default function TutorialsLayout({ children }: TutorialsLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>
}
