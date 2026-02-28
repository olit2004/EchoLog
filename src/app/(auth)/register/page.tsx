import Link from "next/link";

const RegisterPage: React.FC = () => {
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
      <form className="space-y-5">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Christopher Nolan"
            className="
              w-full px-5 py-4
              bg-[#141414]
              text-gray-200
              placeholder-gray-600
              rounded-xl
              border border-[#222]
              focus:border-[#D32F2F]
              focus:ring-1 focus:ring-[#D32F2F]
              outline-none
              transition-all
            "
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="director@echolog.com"
            className="
              w-full px-5 py-4
              bg-[#141414]
              text-gray-200
              placeholder-gray-600
              rounded-xl
              border border-[#222]
              focus:border-[#D32F2F]
              focus:ring-1 focus:ring-[#D32F2F]
              outline-none
              transition-all
            "
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="
              w-full px-5 py-4
              bg-[#141414]
              text-gray-200
              placeholder-gray-600
              rounded-xl
              border border-[#222]
              focus:border-[#D32F2F]
              focus:ring-1 focus:ring-[#D32F2F]
              outline-none
              transition-all
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full py-4 rounded-xl
            bg-[#D32F2F]
            text-white
            font-serif font-bold text-lg
            shadow-lg shadow-[#D32F2F]/20
            hover:bg-[#b22727]
            transition-all
            transform hover:-translate-y-0.5 active:translate-y-0
          "
        >
          Open New Vault
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#D32F2F] font-bold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;