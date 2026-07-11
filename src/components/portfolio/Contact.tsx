import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactEmail } from "@/lib/contact.functions";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const sendEmail = useServerFn(sendContactEmail);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    try {
      const res = await sendEmail({ data: { name, email, subject, message } });
      console.log("SUBMIT SUCCESS:", res);
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      console.error("SUBMIT ERROR:", err);
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let's build <span className="text-gradient">something great</span>
          </>
        }
        description="Open to internships, freelance work, and collaborations."
      />
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 lg:col-span-2"
        >
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            I'll respond within 24 hours. For quick questions, reach me on any
            of the platforms below.
          </p>
          <div className="mt-6 space-y-3">
            {[
              {
                icon: Mail,
                label: "vdntmd@gmail.com",
                href: "mailto:vdntmd@gmail.com",
              },
              {
                icon: Linkedin,
                label: "linkedin.com/in/vedantmodi2006",
                href: "https://www.linkedin.com/in/vedantmodi2006",
              },
              {
                icon: Github,
                label: "github.com/Vedant571",
                href: "https://github.com/Vedant571",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-primary/40 hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="glass rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Doe" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@example.com"
            />
          </div>
          <div className="mt-4">
            <Field
              label="Subject"
              name="subject"
              placeholder="Project inquiry"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project…"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:bg-primary/5"
            />
          </div>

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                Couldn't send your message. Please try again or email me
                directly.
              </span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[0_0_40px_oklch(0.65_0.21_258/0.6)] disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : status === "success" ? (
              <>
                <Check className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:bg-primary/5"
      />
    </div>
  );
}
