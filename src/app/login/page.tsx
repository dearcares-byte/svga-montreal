import { loginAction } from "./actions";
import Image from "next/image";

export const metadata = {
  title: "Login | SVG Association of Montreal",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--deep-navy)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.jpg"
            alt="SVG Association of Montreal"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        <div
          className="rounded-2xl p-8 shadow-2xl"
          style={{ background: "var(--navy)" }}
        >
          <h1
            className="text-2xl font-bold text-center mb-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--gold)",
            }}
          >
            SVG Association of Montreal
          </h1>
          <p
            className="text-center text-sm mb-8"
            style={{ color: "var(--muted)" }}
          >
            Enter the password to access the site
          </p>

          <form action={loginAction} className="space-y-4">
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                autoFocus
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 border outline-none focus:ring-2 transition"
                style={{
                  background: "var(--deep-navy)",
                  borderColor: "rgba(252,209,22,0.3)",
                  // @ts-ignore
                  "--tw-ring-color": "var(--gold)",
                }}
              />
            </div>

            {params?.error && (
              <p className="text-sm text-red-400 text-center">{params.error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-sm transition hover:opacity-90 active:scale-95"
              style={{
                background: "var(--gold)",
                color: "var(--deep-navy)",
              }}
            >
              Enter Site
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
