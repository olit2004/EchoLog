'use client'

import Link from "next/link";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { ActionResponse } from "@/lib/validation/authvalidation";
import { Login } from "@/app/actions/auth";

const initialState: ActionResponse = {
  success: false,
  message: "",
  errors: undefined,
};

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(
    async (prevState: ActionResponse, formData: FormData) => {
      try {
        const result = await Login(formData);
        console.log("Server responded with:", result);

        if (result.success) {
          router.push("/dashboard");
          router.refresh();
        }

        return result;
      } catch (err) {
        return {
          success: false,
          message: (err as Error).message || "An error occurred",
          errors: undefined,
        };
      }
    },
    initialState
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold text-[#EDEDED]">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Access your personal archive.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" action={formAction}>
        {/* Email */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="director@echolog.com"
            required
            className="w-full px-5 py-4 bg-[#141414] text-gray-200 placeholder-gray-600 rounded-xl border border-[#222] focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Password
            </label>
            <Link
              href="#"
              className="text-[10px] font-bold text-[#D32F2F] uppercase tracking-widest hover:opacity-80"
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            className="w-full px-5 py-4 bg-[#141414] text-gray-200 placeholder-gray-600 rounded-xl border border-[#222] focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all"
          />
        </div>

        {/* Generic Error at Bottom */}
        {(!state.success && (state.message || state.errors)) && (
          <div className="text-center text-red-500 text-sm font-semibold">
            {state.message || "Invalid email or password"}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 rounded-xl bg-[#D32F2F] text-white font-serif font-bold text-lg shadow-lg shadow-[#D32F2F]/20 hover:bg-[#b22727] transition-all"
        >
          {isPending ? "Signing In..." : "Enter EchoLog"}
        </button>
      </form>

      {/* Divider */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[#222]" />
        </div>
        <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
          <span className="bg-[#0E0E0E] px-2">Or continue with</span>
        </div>
      </div>

      {/* Google Auth */}
      <button
        type="button"
        className="w-full py-3 rounded-xl border border-[#222] bg-[#111] text-gray-300 font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#161616] transition-all"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          className="w-4 h-4"
          alt="Google"
        />
        Google
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400">
        New to EchoLog?{" "}
        <Link
          href="/register"
          className="text-[#D32F2F] font-bold hover:underline"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;