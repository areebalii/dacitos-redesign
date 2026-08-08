import React from 'react';
import ContactForm from '../features/contact/ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">Contact Us</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Let's Build Together</h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Have a new project or looking to modernize your current IT infrastructure? Get in touch with our engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0F111A] border border-white/10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400">Email Us</h4>
                <p className="text-sm font-semibold text-white mt-1">contact@dacitos.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400">Call Us</h4>
                <p className="text-sm font-semibold text-white mt-1">+92 (0) 300 0000000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400">Headquarters</h4>
                <p className="text-sm font-semibold text-white mt-1">Dacitos Technologies Pvt Ltd</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400">Business Hours</h4>
                <p className="text-sm font-semibold text-white mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}