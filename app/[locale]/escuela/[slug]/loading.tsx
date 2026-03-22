import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function CourseLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center bg-gray-200">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Title */}
          <Skeleton className="mx-auto h-12 w-3/4 md:h-16" />

          {/* Subtitle */}
          <Skeleton className="mx-auto mt-4 h-6 w-2/3" />

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>

      {/* Description Skeleton */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Skeleton className="mb-8 h-10 w-64" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Levels Skeleton */}
      <section className="bg-[var(--wt-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Skeleton className="mx-auto mb-12 h-10 w-48" />

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <Skeleton className="mb-2 h-6 w-24" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="mt-2 h-4 w-48" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="mb-4 h-4 w-24" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                  <Skeleton className="mt-6 h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
