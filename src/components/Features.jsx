import { motion } from "framer-motion";
import { Brain, Users, Laptop, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Evidence-based curricula",
    desc: "Rigorous programs grounded in CBT, EMDR, ACT, and trauma-informed care — taught by clinicians who practice."
  },
  {
    icon: Users,
    title: "Small-group practice",
    desc: "Roleplays, feedback, and observation to translate concepts into confident in-room skills."
  },
  {
    icon: Laptop,
    title: "Hybrid formats",
    desc: "Live online cohorts and in-person intensives across major cities. Earn CE credits."
  },
  {
    icon: CheckCircle2,
    title: "Outcomes-focused",
    desc: "Track your progress with structured competencies, supervision, and case consultation."
  }
];

export default function Features() {
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Training designed for working clinicians
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="h-full rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-md p-6"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-lg shadow-emerald-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold mt-4">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
