import { motion } from "framer-motion";

const quotes = [
  {
    text: "The small-group practice gave me confidence to try new interventions the next day with clients.",
    author: "Lena, LMHC",
  },
  {
    text: "Faculty were experienced and humble. Clear, practical teaching I wish I'd had earlier.",
    author: "Marcus, LCSW",
  },
  {
    text: "I earned my CE credits while actually improving outcomes. The best training I've attended.",
    author: "Priya, PsyD",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          What clinicians are saying
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-md p-6"
            >
              <p className="text-slate-200">“{q.text}”</p>
              <footer className="mt-4 text-sm text-slate-400">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
