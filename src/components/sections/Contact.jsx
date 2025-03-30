import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import { useLanguage } from "../context/useLanguage"
import { config } from "../../config" // Importamos la configuración

export const Contact = () => {
    const { trl } = useLanguage();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => { // Handle input change
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        setIsSubmitting(true);
        
        // Usamos los valores del archivo de configuración
        const { serviceId, templateId, publicKey } = config.emailjs;
        
        emailjs
            .sendForm(
                serviceId, 
                templateId, 
                event.target, 
                publicKey
            )
            .then((result) => {
                setStatus({
                    submitted: true,
                    success: true,
                    message: trl.successMessage
                });
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch((error) => {
                setStatus({
                    submitted: true,
                    success: false,
                    message: trl.errorMessage
                });
                setIsSubmitting(false);
            });
    }

    return (
        <section id="contact" className="bg-gradient-to-b py-24">
            <RevealOnScroll>
                <div className="w-full max-w-6xl mx-auto px-6">
                    <h2 className="bg-clip-text bg-gradient-to-r text-5xl text-center text-transparent font-bold from-blue-500 mb-10 to-cyan-400">
                        {trl.contactTitle}
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <div className="bg-black/30 border border-white/10 p-6 rounded-xl backdrop-blur-sm h-full">
                                <h3 className="text-white text-xl font-semibold mb-4">{trl.letsConnect}</h3>
                                <p className="text-gray-400 mb-6">
                                    {trl.contactDescription}
                                </p>
                                
                                <div className="space-y-4">
                                    {/* Email usando la configuración */}
                                    <a 
                                        href={config.socialLinks.email} 
                                        className="flex bg-white/5 border border-white/10 p-3 rounded-lg gap-4 hover:bg-blue-900/10 hover:border-blue-500/50 hover:translate-x-1 items-center transition-all"
                                    >
                                        <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-blue-400 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 text-sm font-medium">{trl.email}</h4>
                                            <p className="text-blue-400">lucasruiz0110@gmail.com</p>
                                        </div>
                                    </a>

                                    {/* LinkedIn usando la configuración */}
                                    <a 
                                        href={config.socialLinks.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex bg-white/5 border border-white/10 p-3 rounded-lg gap-4 hover:bg-blue-900/10 hover:border-blue-500/50 hover:translate-x-1 items-center transition-all"
                                    >
                                        <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-full">
                                            <svg className="h-5 text-blue-400 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 text-sm font-medium">LinkedIn</h4>
                                            <p className="text-blue-400">lucasruiz0101</p>
                                        </div>
                                    </a>

                                    {/* GitHub usando la configuración */}
                                    <a 
                                        href={config.socialLinks.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex bg-white/5 border border-white/10 p-3 rounded-lg gap-4 hover:bg-blue-900/10 hover:border-blue-500/50 hover:translate-x-1 items-center transition-all"
                                    >
                                        <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-full">
                                            <svg className="h-5 text-blue-400 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 text-sm font-medium">GitHub</h4>
                                            <p className="text-blue-400">chill0101</p>
                                        </div>
                                    </a>

                                    {/* WhatsApp usando la configuración */}
                                    <a 
                                        href={config.socialLinks.whatsapp} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex bg-white/5 border border-white/10 p-3 rounded-lg gap-4 hover:bg-blue-900/10 hover:border-blue-500/50 hover:translate-x-1 items-center transition-all"
                                    >
                                        <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-blue-400 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 text-sm font-medium">{trl.whatsapp}</h4>
                                            <p className="text-blue-400">{trl.contactLink}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:col-span-3">
                            <form onSubmit={handleSubmit} className="bg-black/30 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="text-gray-300 text-sm block font-medium mb-2">{trl.name}</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                            className="bg-white/5 border border-white/10 rounded-lg text-white w-full focus:bg-blue-500/5 focus:border-blue-500 focus:outline-none placeholder-gray-500 px-4 py-3 transition"
                                            placeholder={trl.namePlaceholder} // Usamos la traducción
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="text-gray-300 text-sm block font-medium mb-2">{trl.email}</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                            className="bg-white/5 border border-white/10 rounded-lg text-white w-full focus:bg-blue-500/5 focus:border-blue-500 focus:outline-none placeholder-gray-500 px-4 py-3 transition"
                                            placeholder={trl.emailPlaceholder} // Usamos la traducción
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="text-gray-300 text-sm block font-medium mb-2">{trl.message}</label>
                                        <textarea 
                                            name="message" 
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required    
                                            rows={5}
                                            className="bg-white/5 border border-white/10 rounded-lg text-white w-full focus:bg-blue-500/5 focus:border-blue-500 focus:outline-none placeholder-gray-500 px-4 py-3 transition"
                                            placeholder={trl.messagePlaceholder}
                                        ></textarea>
                                    </div>
                                    
                                    {status.submitted && (
                                        <div className={`p-3 rounded-lg ${status.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {status.message}
                                        </div>
                                    )}
                                    
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-indigo-700 hover:bg-indigo-500 transition text-white font-medium py-3 rounded-lg overflow-hidden relative
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex justify-center gap-2 items-center">
                                                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                {trl.sending}
                                            </span>
                                        ) : trl.sendMessage}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
