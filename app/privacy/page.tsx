import type { Metadata } from "next";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { CONTACT_EMAIL, PUBLISHER, RECHECKED } from "@/lib/site";

const title = "Privacy";
const description = "What RobotMowGuide collects, what it does not store, and how to reach the publisher.";

export const metadata: Metadata = pageMeta({ title, description, path: "/privacy" });

export default function PrivacyPage() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/privacy"
      updated={RECHECKED}
      whatChanged="October 13, 2026: spells out what the finder and the slope converter send, and what they leave out."
    >
      <p className="measure">
        {PUBLISHER} publishes RobotMowGuide. For a privacy question, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <YardPhoto id="photo-privacy" />
      <h2>Hosting</h2>
      <p className="measure">
        The site is hosted on Vercel. A hosting provider can keep request logs, which may include an IP
        address, the page requested, and the time. Those logs are for operating the site.
      </p>
      <h2>Measurement</h2>
      <p className="measure">
        When a Google Analytics 4 measurement ID is set in the site configuration, the site loads Google’s
        tag. That tag can set cookies and record page views. You can block it with your browser, with an
        extension, or with Google’s own opt-out tools. If no measurement ID is set, the tag is not loaded.
      </p>
      <p className="measure">
        A click on an Amazon button can send an amazon_click event. The fields are the ASIN, the product
        slug, the variant name, the placement on the page, and the page type. The event is sent with a
        beacon and does not hold the page back. The site can also send a web_vital event with a metric name,
        a value, a rating, and an id, so we can see whether pages load slowly.
      </p>
      <p className="measure">
        The mower finder and the slope converter can send a tool_use event. The fields are the tool name and
        the step, such as area, slope, or result. The event does not include the lawn size you type, your
        address, or any other personal data.
      </p>
      <h2>Newsletter form</h2>
      <p className="measure">
        The footer form does not add you to a mailing list. There is no list. Submitting it opens your email
        app addressed to {CONTACT_EMAIL}. The site does not store the address you type.
      </p>
      <h2>Amazon</h2>
      <p className="measure">
        When you follow a link to Amazon, Amazon’s own privacy policy applies. This site does not receive
        your Amazon account, your orders, or your payment details.
      </p>
      <p className="measure">We do not sell personal information.</p>
      <Related
        links={[
          { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
          { href: "/about", label: "About RobotMowGuide" },
        ]}
      />
    </ArticleFrame>
  );
}
