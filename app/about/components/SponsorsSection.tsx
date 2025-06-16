"use client";

import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Google",
    title: "Technology Partner",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  },
  {
    name: "Microsoft",
    title: "Cloud Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  { name: "Amazon",
    title: "Infrastructure Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Meta",
    title: "Innovation Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "GitHub",
    title: "Development Partner",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "DigitalOcean",
    title: "Hosting Partner",
    logo: "https://www.digitalocean.com/assets/media/logos-badges/png/DO_Logo_Horizontal_Blue-3db19536.png"
  }
];

export function SponsorsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <button className="bg-slate-800 no-underline group relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block cursor-default">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                  <span>Our Sponsors</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Proudly Supported by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We&apos;re grateful for the support of these amazing companies who share our vision for accessible coding education.
            </p>
          </motion.div>

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll gap-8 py-4">
             
              {sponsors.map((sponsor, idx) => (
                <motion.div
                  key={`first-${idx}`}
                  className="flex-shrink-0 w-[300px] h-[200px] rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter dark:invert"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{sponsor.name}</h3>
                    <p className="text-sm text-muted-foreground">{sponsor.title}</p>
                  </div>
                </motion.div>
              ))}

             
              {sponsors.map((sponsor, idx) => (
                <motion.div
                  key={`second-${idx}`}
                  className="flex-shrink-0 w-[300px] h-[200px] rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter dark:invert"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{sponsor.name}</h3>
                    <p className="text-sm text-muted-foreground">{sponsor.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}