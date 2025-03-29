export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-title font-bold uppercase tracking-tight mb-2">
        {title}
      </h2>
      <div className="h-1.5 w-12 bg-primary" />
    </div>
  )
}
