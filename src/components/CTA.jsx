import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to level up your clinical practice?
          </h3>
          <p className="text-slate-300 mt-3">
            Join the next cohort and earn CE credits with hands-on mentorship.
          </p>

          <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Get cohort dates
            </button>
          </form>

          <p className="text-xs text-slate-400 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
