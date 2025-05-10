export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-4xl font-bold">About Our Team</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
          <div className="h-24 w-24 rounded-full bg-muted"></div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-sm text-muted-foreground">CEO & Founder</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
          <div className="h-24 w-24 rounded-full bg-muted"></div>
          <div className="text-center">
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-sm text-muted-foreground">CTO</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
          <div className="h-24 w-24 rounded-full bg-muted"></div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="text-sm text-muted-foreground">Lead Developer</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
