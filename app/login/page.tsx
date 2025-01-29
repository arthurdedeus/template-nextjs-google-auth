import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function LoginPage() {
  const formAction = async () => {
    "use server";
    await signIn("google", { redirectTo: "/dashboard" });
  };

  return (
    <div className="flex flex-1 items-center justify-center w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-8">
        <h3 className="text-2xl font-bold">Login to your account</h3>
        <form action={formAction}>
          <Button type="submit">Sign in with Google</Button>
        </form>
      </div>
    </div>
  );
}
