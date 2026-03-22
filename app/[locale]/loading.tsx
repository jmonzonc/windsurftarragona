import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-dvh bg-[#F0F9FF]">
      {/* Navigation Skeleton */}
      <nav className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 md:px-16">
        <Skeleton className="h-8 w-40" />
        <div className="hidden items-center gap-6 md:flex">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-10 w-28" />
      </nav>

      {/* Hero Skeleton */}
      <section className="relative flex h-[70vh] items-center overflow-hidden bg-gray-200">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 to-gray-200" />
        <div className="relative z-10 flex w-full flex-col items-start gap-6 px-6 md:px-16">
          <Skeleton className="h-8 w-32 rounded-full" />
          <Skeleton className="h-12 w-full max-w-2xl" />
          <Skeleton className="h-12 w-full max-w-xl" />
          <Skeleton className="h-6 w-full max-w-lg" />
          <div className="mt-4 flex gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="flex justify-center gap-8 bg-white px-6 py-8 md:gap-16">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </section>

      {/* Cards Grid Skeleton */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-12 w-80" />
            <Skeleton className="h-6 w-96" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-md">
                <Skeleton className="aspect-video w-full" />
                <div className="flex flex-col gap-3 p-4">
                  <Skeleton className="h-5 w-24 rounded-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="mt-2 h-5 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
