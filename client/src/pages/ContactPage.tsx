import ContactSection from "@/components/ContactSection";
import PortfolioPageHero from "@/components/PortfolioPageHero";
import SiteShell from "@/components/SiteShell";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";

const windowPortrait = "/manus-storage/abhinav-window-portrait_0ff0625e.webp";
const windowPortraitSmall = "/manus-storage/abhinav-window-portrait-640_4127cd31.webp";

export default function ContactPage() {
  usePageMetadata(portfolioPageMetadata.contact);

  return (
    <SiteShell>
      <PortfolioPageHero
        index="03"
        eyebrow="Open channel"
        title={<>Make the model<br /><strong>answerable.</strong></>}
        summary="For research conversations, applied collaboration, and questions about trustworthy AI, healthcare NLP, transformer behavior, or efficient model systems."
        image={windowPortrait}
        imageSmall={windowPortraitSmall}
        imageAlt="Abhinav Srivastava seated near a sunlit window"
        imageWidth={1536}
        imageHeight={2048}
        caption="Portrait study / open to conversation"
        marks={<><span>Research</span><span>Applied systems</span><span>Collaboration</span></>}
      />

      <section className="contact-brief" aria-labelledby="contact-brief-title">
        <p className="eyebrow">A considered start</p>
        <h2 id="contact-brief-title">Bring the question,<br />the context, and <em>the stakes.</em></h2>
        <p>The portfolio is designed around the conditions that make a system matter. If your work shares that orientation, the conversation is welcome.</p>
      </section>
      <ContactSection />
    </SiteShell>
  );
}
