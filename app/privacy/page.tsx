import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy", description: "How information submitted through this website is collected and used." };

export default function Privacy() {
  return <main id="main-content"><section className="section"><div className="site-shell max-w-3xl"><p className="eyebrow">Privacy</p><h1 className="page-title mt-4">How your information is used</h1><div className="rich-text mt-9">
    <p>This website collects information only when you choose to submit the contact form or consultation request form.</p>
    <h2>Information collected</h2><p>Both forms collect your name, email address, business name, and message. The consultation form also collects your main marketing challenge and desired business outcome. A website URL and phone or WhatsApp number are optional.</p>
    <h2>Why it is collected</h2><p>The information is used to review your enquiry, respond to you, understand whether the requested support may be a fit, and arrange consultation scheduling when relevant. A submitted request is not treated as a confirmed appointment.</p>
    <h2>Storage and service providers</h2><p>Form details are processed by FormSubmit so the enquiry can be delivered to my email address. When the website database is available, an additional copy is stored there as a backup. The hosting provider may process technical request information needed to operate and protect the service. This website does not add advertising analytics or behavioral tracking.</p>
    <h2>Spam and security</h2><p>The forms use a hidden spam field, minimum completion-time check, server-side validation, and duplicate-submission protection. Reasonable safeguards are used, but no online system can be guaranteed completely secure.</p>
    <h2>Access and correction</h2><p>You may use the contact form to request access to, correction of, or deletion of information you previously submitted. Include enough context to identify the submission without sharing unnecessary sensitive information.</p>
    <h2>Data minimization</h2><p>Please do not submit passwords, payment details, confidential account information, or sensitive personal information through these forms.</p>
  </div></div></section></main>;
}
