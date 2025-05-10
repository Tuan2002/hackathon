import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requireAuth } from "@/lib/auth-utils";

export default async function DashboardPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {user.name}!
        </h2>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your account
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">
              +10% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 added this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Project updated</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">New comment added</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Task completed</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Your account statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Account Type</p>
                <p className="text-sm">{user.role?.name || "User"}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm">{user.email}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Member Since</p>
                <p className="text-sm">March 2023</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Last Login</p>
                <p className="text-sm">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
