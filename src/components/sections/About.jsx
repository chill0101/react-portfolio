import { RevealOnScroll } from "../RevealOnScroll"
import { useLanguage } from "../context/useLanguage"

export const About = () => {
    // Hook imports for language context
    // This hook provides access to the language context, allowing us to retrieve translations.
    const { trl } = useLanguage();
    
    const frontendSkills = [
        "JavaScript",
        "TypeScript", 
        "React", 
        "TailwindCSS",
        "Bootstrap",
        "CSS",
        "HTML",
    ]

    const backendSkills = [
        "Node.js", 
        "Express", 
        "MongoDB", 
        "Firebase",
        "MySQL",
        "PHP",
        "JAVA"
    ]

  return (
    <section id="about" className="py-20">
        <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {trl.aboutTitle}
            </h2>
            <div className="rounded-2xl p-8 border-white/10 border backdrop-blur-sm bg-black/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all">
                <p className="text-gray-300 text-lg leading-relaxed">
                    {trl.aboutDescription1}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-2 mb-8">
                    {trl.aboutDescription2}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,20,246,0.1)]">   
                        <h3 className="text-xl font-bold mb-4 text-blue-400">{trl.frontendTitle}</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="rounded-full bg-gray-300/10 text-blue-400 px-4 py-1 text-sm hover:bg-blue-500/20 
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg  transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,20,246,0.1)]" >   
                        <h3 className="text-xl font-bold mb-4 text-blue-400">{trl.backendTitle}</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="rounded-full bg-blue-500/10 text-blue-400 px-4 py-1 text-sm hover:bg-blue-500/20 
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">{trl.educationTitle}</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-3">
                            <li>
                                <strong>{trl.education1}</strong>
                                <p className="text-sm text-gray-400 ml-5">{trl.education1Detail}</p>
                                <p className="text-sm text-gray-400 ml-5">
                                    {/* Quick update - can we pass it on translation.js later */}
                                    {trl.language === 'es' ? 
                                      "Beca a mejor desempeño 1° y 2° cuarrimestre 2024" : 
                                      "Scholarship for best performance 1st and 2nd quarter 2024"}
                                </p>
                            </li>
                            <li>
                                <strong>{trl.education2}</strong>
                                <p className="text-sm text-gray-400 ml-5">{trl.education2Detail}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">{trl.experienceTitle}</h3>
                        <div className="space-y-4 text-gray-300">
                            <h4 className="font-semibold">
                                {/*Quick update - can we pass it on translation.js later */}
                                {trl.language === 'es' ? 
                                  "Accenture - SSr HR Analytics Analyst [2022 - Actual]" : 
                                  "Accenture - SSr HR Analytics Analyst [2022 - Present]"}
                            </h4>
                            <p className="text-gray-400">{trl.jobDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}
