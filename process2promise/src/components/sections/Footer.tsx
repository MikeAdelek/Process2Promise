export const Footer = () => (
  <footer className="bg-black py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="mb-8">
        <h2 className="font-serif font-bold text-2xl text-white">
          Process to <span className="text-amber-500">Promise</span>
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto italic">
          "The future you want is reached by the promise you keep."
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8 text-slate-400">
        <a href="#" className="hover:text-amber-500 transition-colors">
          Instagram
        </a>
        <a href="#" className="hover:text-amber-500 transition-colors">
          YouTube
        </a>
        <a href="#" className="hover:text-amber-500 transition-colors">
          Telegram
        </a>
      </div>

      <p className="text-[10px] text-slate-600 uppercase tracking-widest">
        © 2026 Process to Promise Virtual Conference. All Rights Reserved.
      </p>
    </div>
  </footer>
);
