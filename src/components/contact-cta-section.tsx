const linkBaseClass =
  "font-body inline-flex w-full items-center justify-center rounded-2xl border border-white/35 bg-[#1549B2] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#103b96]";

export function ContactCtaSection() {
  return (
    <section id="contact" className="bg-[#54A6B6] text-white">
      <div className="container py-12 md:py-14">
        <div className="text-center">
          <h3 className="font-heading font-medium text-lg">Not sure where to start?</h3>
          <p>
            We would love to help! Schedule a quick 15-30 minute call to discuss your business
            needs, and we will match you with the perfect plan.
          </p>
          <a
            href="https://link.tlppublishing.com/widget/bookings/tlppublishing"
            className="mt-7 inline-flex w-full max-w-md flex-col items-center justify-center rounded-full border-2 border-[#E93D3D] bg-[#E93D3D] px-8 py-3 font-heading text-white transition hover:bg-[#cf3030]"
          >
            <span className="font-bold text-xl">Tall to us</span>
            <span className="text-muted text-sm">Book an Appointment Now</span>
          </a>
        </div>
        {/* <div className="grid gap-4 md:grid-cols-3">
          <a href={contact.phoneHref} className={linkBaseClass}>
            {contact.phoneLabel}
          </a>
          <a href={contact.emailHref} className={linkBaseClass}>
            {contact.emailLabel}
          </a>
          <a
            href={contact.websiteHref}
            className={linkBaseClass}
            target="_blank"
            rel="noreferrer noopener"
          >
            {contact.websiteLabel}
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div> */}
      </div>
    </section>
  );
}
