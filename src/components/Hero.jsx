import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 relative overflow-hidden">
      {/* Background gradient / orbs */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Advanced training for psychotherapists — online and in person
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300 leading-relaxed"
            >
              Learn evidence-based approaches, refine clinical skills, and earn CE credits with immersive programs taught by seasoned clinicians.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Browse Courses <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-slate-600 text-white hover:border-slate-400 transition-colors"
              >
                Download Prospectus
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-slate-300">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="student" className="h-8 w-8 rounded-full border-2 border-slate-900" />
                ))}
              </div>
              <p className="text-sm">Trusted by 4,000+ clinicians globally</p>
            </div>
          </div>

          <div className="relative">
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-slate-700 bg-slate-800/60 backdrop-blur-md p-6 shadow-2xl"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-900/70 grid place-items-center">
                  <PlayCircle className="h-16 w-16 text-white/90" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-semibold text-lg">Live skills workshops</h3>
                <p className="text-slate-300 text-sm mt-1">Join small-group practice sessions led by faculty. Build muscle memory for the room.</p>
              </div>
            </motion.div>

            {/* Floating orbs */}
            <motion.div
              className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-emerald-400/30 blur-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-cyan-400/25 blur-xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 7 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
