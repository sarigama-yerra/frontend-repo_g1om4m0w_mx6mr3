import { motion } from "framer-motion";
import { CalendarDays, MapPin, Video, Star } from "lucide-react";

const courses = [
  {
    title: "Trauma-Focused CBT Intensive",
    mode: "In Person — NYC",
    icon: MapPin,
    date: "May 10-12, 2025",
    rating: 4.9,
    color: "from-emerald-400 to-cyan-500",
  },
  {
    title: "ACT for Complex Anxiety",
    mode: "Live Online Cohort",
    icon: Video,
    date: "Starts June 3, 2025",
    rating: 4.8,
    color: "from-violet-400 to-indigo-500",
  },
  {
    title: "EMDR Skills Lab",
    mode: "In Person — Chicago",
    icon: MapPin,
    date: "July 20-21, 2025",
    rating: 4.9,
    color: "from-rose-400 to-orange-500",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured programs</h2>
            <p className="text-slate-300 mt-2">Cohorts open now with limited seats</p>
          </div>
          <a href="#cta" className="px-5 py-2 rounded-xl border border-slate-600 text-white hover:border-slate-400">View all courses</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {courses.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-md overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br ${c.color}`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-slate-300">{c.mode}</div>
                </div>
                <h3 className="text-white font-semibold mt-3">{c.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-slate-300 text-sm">
                  <CalendarDays className="h-4 w-4" /> {c.date}
                  <span className="inline-flex items-center gap-1 ml-auto text-amber-300">
                    <Star className="h-4 w-4 fill-amber-300"/> {c.rating}
                  </span>
                </div>
                <a href="#cta" className="mt-5 inline-block px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg">Reserve seat</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
