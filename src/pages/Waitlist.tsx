import { motion } from "motion/react";

export default function Waitlist() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9F99D] selection:text-black pt-20">
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Join the <span className="text-[#D9F99D]">Waitlist</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Be among the first to experience India's most student-friendly financial ecosystem.
            </p>
          </div>
          
          <div className="w-full h-[800px] rounded-2xl overflow-hidden bg-white/5">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScz_9iuQDwLixg-hhDDc3-HEBPzuZQgsw5XxMhFGS_CimcyRg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Waitlist Form"
              className="w-full h-full"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
