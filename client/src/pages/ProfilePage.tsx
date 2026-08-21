import AboutSection from "@/components/AboutSection";
import PortfolioPageHero from "@/components/PortfolioPageHero";
import ResumeSection from "@/components/ResumeSection";
import SiteShell from "@/components/SiteShell";
import TrajectorySection from "@/components/TrajectorySection";
import { portfolioPageMetadata, usePageMetadata } from "@/lib/pageMetadata";

const cafePortrait = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/qJXgbAhpYeLRRiur.jpeg";
const cafePortraitSmall = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/VnqvCuixroXKspdm.webp";

export default function ProfilePage() {
  usePageMetadata(portfolioPageMetadata.profile);

  return (
    <SiteShell>
      <PortfolioPageHero
        index="02"
        eyebrow="Profile record"
        title={<>Inquiry, before<br /><strong>optimization.</strong></>}
        summary="An undergraduate research practice focused on making advanced systems more reliable, more interpretable, and more useful in consequential settings."
        image={cafePortrait}
        imageSmall={cafePortraitSmall}
        imageAlt="Abhinav Srivastava seated at a café"
        imageWidth={1240}
        imageHeight={1226}
        caption="Portrait study / evidence-led practice"
        marks={<><span>Undergraduate researcher</span><span>Computer science</span><span>New Delhi, India</span></>}
      />

      <section className="profile-manifesto" aria-labelledby="profile-manifesto-title">
        <p className="eyebrow">Working premise</p>
        <h2 id="profile-manifesto-title">A system should show<br />its limits—not just <em>its outputs.</em></h2>
        <div className="profile-manifesto__copy">
          <p>The throughline across research and applied work is a preference for evidence, calibration, and operational clarity. Those concerns inform work in healthcare NLP, model behavior, risk systems, and efficient LLM pipelines.</p>
          <dl><div><dt>Orientation</dt><dd>Trustworthy AI</dd></div><div><dt>Practice</dt><dd>Research + systems</dd></div><div><dt>Current study</dt><dd>Computer science</dd></div></dl>
        </div>
      </section>

      <AboutSection />
      <TrajectorySection />
      <ResumeSection />
    </SiteShell>
  );
}
