import { Menu, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="backdrop-blur-md bg-slate-900/60 border border-slate-700/60 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-6 py-3">
            <motion.a
              href="#home"
              className="flex items-center gap-3 text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center shadow-lg shadow-emerald-500/20">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold tracking-tight">
                <span className="text-white">ClinicianCourses</span>
                <span className="ml-2 text-emerald-300/80 text-sm">by experts</span>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-slate-300">
              <a href="#courses" className="hover:text-white transition-colors">Courses</a>
              <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
              <a href="#cta" className="hover:text-white transition-colors">Enroll</a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#cta"
                className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Get Started
              </a>
              <button className="md:hidden p-2 rounded-lg border border-slate-700 text-slate-200">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
