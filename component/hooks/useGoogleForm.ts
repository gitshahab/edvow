"use client";

import { useState } from "react";

export const GOOGLE_FORM_CONFIG = {
  actionUrl: `https://docs.google.com/forms/d/e/1FAIpQLSerhXljFiopd34gLDR269HzEtdGhzFVeSEF7_idBu9khiJJWw/formResponse`,
  entries: {
    fullName: "entry.1545613077",
    email: "entry.2089288492",
    phone: "entry.611749428",
    source: "entry.1535830781",
    message: "entry.1594241726",
  },
};

export interface FormPayload {
  fullName: string;
  email: string;
  phone: string;
  source: string;
  message: string;
}

export function useGoogleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: FormPayload) => {
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.append(GOOGLE_FORM_CONFIG.entries.fullName, data.fullName);
    formData.append(GOOGLE_FORM_CONFIG.entries.email, data.email);
    formData.append(GOOGLE_FORM_CONFIG.entries.phone, data.phone);
    formData.append(GOOGLE_FORM_CONFIG.entries.source, data.source);
    formData.append(GOOGLE_FORM_CONFIG.entries.message, data.message);

    try {
      // mode: 'no-cors' allows sending data to Google without CORS errors
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setIsSuccess(true);
    } catch {
      setError(
        "Unable to submit right now. Please email us at hello@edvow.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
  };

  return { submitForm, isSubmitting, isSuccess, error, resetStatus };
}
