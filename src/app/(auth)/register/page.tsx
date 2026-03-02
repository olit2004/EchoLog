'use client'

import Link from "next/link";
import { ActionResponse } from "@/lib/validation/authvalidation";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Register } from "@/app/actions/auth";

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
};

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(
    async (prevState: ActionResponse, formData: FormData) => {
      try {
        const result = await Register(formData);
        if (result.success) {
          router.push('/dashboard');
        }
        console.log("the results are", result);
        return result;
      } catch (err) {
        return {
          success: false,
          message: (err as Error).message || 'An error occurred',
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
          Create Your Vault
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Start archiving your cinematic journey.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" action={formAction}>
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Christopher Nolan"
            className="w-full px-5 py-4 bg-[#141414] text-gray-200 placeholder-gray-600 rounded-xl border border-[#222] focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="director@echolog.com"
            className="w-full px-5 py-4 bg-[#141414] text-gray-200 placeholder-gray-600 rounded-xl border border-[#222] focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-5 py-4 bg-[#141414] text-gray-200 placeholder-gray-600 rounded-xl border border-[#222] focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all"
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
            className="w-full px-5 py-4 bg-[#141414] text-gray-200 placeholder-gray-600 rounded-xl border border-[#222] focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-all"
          />
        </div>

        {/* Unified Error Block */}
        {(!state.success && (state.message || state.errors)) && (
          <div className="text-center text-red-500 text-sm font-semibold">
            {state.message || "Something went wrong. Please check your details."}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 rounded-xl bg-[#D32F2F] text-white font-serif font-bold text-lg shadow-lg shadow-[#D32F2F]/20 hover:bg-[#b22727] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isPending ? "Creating..." : "Open New Echolog"}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="text-[#D32F2F] font-bold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;