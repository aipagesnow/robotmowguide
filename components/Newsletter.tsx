"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export function Newsletter() {
  const [note, setNote] = useState("");

  return (
    <form
      className="newsletter"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = String(data.get("email") || "").trim();
        const body = email
          ? `Please write when a newsletter starts. My email is ${email}.`
          : "Please write when a newsletter starts.";
        setNote(`This form does not add you to a list. Your email app can send the note to ${CONTACT_EMAIL}.`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Newsletter note")}&body=${encodeURIComponent(body)}`;
      }}
    >
      <p className="label">Newsletter</p>
      <p className="m-0 max-w-[66ch] text-[0.95rem]">
        There is no mailing list yet. Email {CONTACT_EMAIL} if you want a note when one starts. Sending this
        form opens your email app. It does not add you to a list.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input id="newsletter-email" name="email" type="email" autoComplete="email" />
        <button type="submit">Email us about a newsletter</button>
      </div>
      {note ? (
        <p role="status" className="text-[0.95rem]">
          {note}
        </p>
      ) : null}
    </form>
  );
}
