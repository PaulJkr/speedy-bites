import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(25_95%_53%/0.08),transparent_70%)]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
            <Smartphone className="w-9 h-9 text-primary-foreground" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-wide mb-4">
            GET THE <span className="text-gradient">APP</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Download the FlameBite app for exclusive deals, faster ordering, and real-time tracking. Available on iOS and Android.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-hero text-primary-foreground font-display text-xl tracking-wide px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-glow">
              APP STORE
            </button>
            <button className="border border-border text-foreground font-display text-xl tracking-wide px-8 py-4 rounded-lg hover:bg-card transition-colors">
              GOOGLE PLAY
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
