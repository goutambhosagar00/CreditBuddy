import React from "react";

/**
 * Replace GOOGLE_FORM_EMBED_URL with your Google Form embed URL:
 *  - Google Form -> Send -> Embed (</>) -> copy src value
 */
export default function JoinWaitlistForm() {
  const GOOGLE_FORM_EMBED_URL = "https://forms.gle/tHNRCin6ewL4Kruc6";

  return (
    <div className="join-waitlist-page">
      <div className="join-waitlist-card container-section animate-fadeup-sm">
        <h3 className="section-title">Join the Waitlist</h3>
        <p className="muted">
          Be the first to get early access and exclusive rewards.
        </p>

        <div className="iframe-wrap">
          <iframe
  title="Join Waitlist"
  src={GOOGLE_FORM_EMBED_URL}
  width="100%"
  height="4000"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
/>

        </div>
      </div>
    </div>
  );
}
