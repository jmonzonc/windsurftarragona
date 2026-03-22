import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'

export default function EscuelaLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center bg-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C4A6E]/80 to-[#0C4A6E]/60" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12 bg-white/20" />
            <Skeleton className="h-4 w-4 bg-white/20" />
            <Skeleton className="h-4 w-16 bg-white/20" />
          </div>
          <Skeleton className="h-14 w-80 bg-white/20 md:w-[500px]" />
          <Skeleton className="h-6 w-64 bg-white/20 md:w-96" />
        </div>
      </section>

      {/* Intro skeleton */}
      <section className="bg-[#F0F9FF] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Skeleton className="mx-auto h-6 w-full max-w-2xl" />
          <Skeleton className="mx-auto h-6 w-full max-w-xl" />
          <Skeleton className="mx-auto h-6 w-3/4" />
        </div>
      </section>

      {/* Course grid skeleton */}
      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Skeleton className="mx-auto h-10 w-64" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg">
                <Skeleton className="h-48 w-full" />
                <CardContent className="space-y-4 p-6">
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-7 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                  <Skeleton className="h-6 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
