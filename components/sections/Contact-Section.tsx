"use client";

import React from "react";
import { Clock, MapPin, Phone, Mail, ChevronDown } from "lucide-react";

const hours = [
  { day: "Lundi - Jeudi", time: "18:00 — 02:00" },
  { day: "Vendredi", time: "18:00 — 04:00" },
  { day: "Samedi", time: "19:00 — 05:00", highlight: true },
  { day: "Dimanche", time: "Fermé" },
];

const subjects = [
  "Réservation Particulière",
  "Privatisation",
  "Presse",
  "Autre",
];

const EMAIL = "contact@elixir-dore.fr";

/* Radiating avenues, in the manner of an étoile — drawn rather than
   photographed so the panel stays on-palette at any size.

   Endpoints are rounded to a fixed precision: Math.sin/cos are not required
   to be bit-identical across engines, so the raw doubles serialize to
   different attribute strings on server and client and break hydration. */
const avenues = Array.from({ length: 12 }, (_, i) => {
  const radians = (i * 30 * Math.PI) / 180;
  return {
    deg: i * 30,
    x2: (520 * Math.cos(radians)).toFixed(3),
    y2: (520 * Math.sin(radians)).toFixed(3),
  };
});

function MapPanel() {

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-md hairline bg-surface-container-lowest">
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <rect width="800" height="500" fill="#06080e" />
        <g stroke="#2a3244" strokeWidth="1" opacity="0.7">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 34} x2="800" y2={i * 34} />
          ))}
          {Array.from({ length: 24 }, (_, i) => (
            <line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="500" />
          ))}
        </g>
        <g transform="translate(400 250)">
          {avenues.map((avenue) => (
            <line
              key={avenue.deg}
              x1="0"
              y1="0"
              x2={avenue.x2}
              y2={avenue.y2}
              stroke="#64748b"
              strokeWidth="1.5"
              opacity="0.55"
            />
          ))}
          {[70, 130, 200].map((r) => (
            <circle
              key={r}
              r={r}
              fill="none"
              stroke="#64748b"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
          <circle r="34" fill="#0a0c14" stroke="#64748b" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Frame chrome */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-on-surface-variant">
          <span>Contact — Midnight Edition &nbsp;|&nbsp; Paris 8</span>
          <span className="hidden sm:inline">48.8738° N, 2.3014° E</span>
        </div>
        <div className="flex items-end justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-on-surface-variant">
          <span className="hidden sm:inline">
            Contact — Midnight Edition &nbsp;|&nbsp; Paris 8
          </span>
          <span className="sm:hidden">Paris 8</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-outline/60">
            N
          </span>
        </div>
      </div>

      {/* Pin */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <span className="h-2.5 w-2.5 bg-primary shadow-[0_0_0_4px_rgba(226,232,240,0.15)]" />
        <span className="silver-fill text-on-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
          L&apos;Élixir Doré
        </span>
      </div>
    </div>
  );
}

const fieldClass =
  "w-full bg-transparent border-b border-outline-variant/70 pb-3 text-on-surface placeholder:text-on-surface-variant/50 placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-xs focus:border-secondary focus:outline-none transition-colors";

const ContactSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("sujet") ?? "");
    const body = `Nom: ${data.get("nom") ?? ""}\nEmail: ${data.get("email") ?? ""}\n\n${data.get("message") ?? ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-surface py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <h2 className="text-display-lg uppercase text-on-surface md:text-[4.5rem]">
            Contact &amp; Access
          </h2>
          <p className="text-body-md max-w-xl font-light text-on-surface-variant">
            Situé au cœur du triangle d&apos;or, L&apos;Élixir Doré vous
            accueille dans un écrin de velours minuit pour une expérience
            sensorielle hors du temps.
          </p>
        </div>

        <div className="my-16 h-px w-full bg-outline-variant/40" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,20rem)_1fr]">
          {/* Left rail */}
          <div className="flex flex-col gap-8">
            <div className="hairline rounded-md bg-surface-container-low p-8">
              <div className="mb-8 flex items-center gap-3">
                <Clock className="text-secondary" size={18} />
                <h3 className="text-label-caps text-on-surface">Horaires</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between gap-4 border-b border-outline-variant/30 pb-3 last:border-none last:pb-0"
                  >
                    <span
                      className={`text-[11px] uppercase tracking-[0.12em] ${row.highlight ? "text-secondary" : "text-on-surface-variant"}`}
                    >
                      {row.day}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline rounded-md bg-surface-container-low p-8">
              <div className="mb-8 flex items-center gap-3">
                <MapPin className="text-secondary" size={18} />
                <h3 className="text-label-caps text-on-surface">Adresse</h3>
              </div>
              <p className="text-body-md font-light leading-relaxed text-on-surface">
                18 Avenue de la Nuit Éternelle
                <br />
                75008 Paris, France
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="tel:+33123456789"
                  className="group flex items-center gap-3 text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  <Phone className="text-secondary shrink-0" size={16} />
                  <span className="text-body-md font-light">
                    +33 1 23 45 67 89
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  <Mail className="text-secondary shrink-0" size={16} />
                  <span className="text-body-md font-light">{EMAIL}</span>
                </a>
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <button
                  type="button"
                  className="silver-fill text-on-primary rounded-md px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest shadow-lg transition-all hover:brightness-110"
                >
                  Réserver
                </button>
                <button
                  type="button"
                  className="hairline text-on-surface rounded-md px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all hover:bg-on-surface/5"
                >
                  Itinéraire
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            <MapPanel />

            <div className="hairline rounded-md bg-surface-container-low p-8 md:p-12">
              <h3 className="font-serif text-3xl text-on-surface md:text-4xl">
                Envoyez un message
              </h3>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="nom"
                      className="text-label-caps text-[10px] text-on-surface-variant"
                    >
                      Nom complet
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="email"
                      className="text-label-caps text-[10px] text-on-surface-variant"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jean@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="sujet"
                    className="text-label-caps text-[10px] text-on-surface-variant"
                  >
                    Sujet
                  </label>
                  <div className="relative">
                    <select
                      id="sujet"
                      name="sujet"
                      defaultValue={subjects[0]}
                      className={`${fieldClass} appearance-none pr-8`}
                    >
                      {subjects.map((subject) => (
                        <option
                          key={subject}
                          value={subject}
                          className="bg-surface-container text-on-surface"
                        >
                          {subject}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-0 top-1 text-on-surface-variant"
                      size={18}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="message"
                    className="text-label-caps text-[10px] text-on-surface-variant"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Votre message ici…"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="silver-fill text-on-primary rounded-md px-12 py-4 font-sans text-xs font-bold uppercase tracking-widest shadow-lg transition-all hover:brightness-110"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
