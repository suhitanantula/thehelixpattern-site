// ══════════════════════════════════════════════════════════════════
// HELIX PATTERN - FORM CONFIGURATION
// Edit this file to change form fields or Formspree endpoint
// ══════════════════════════════════════════════════════════════════

const FORM_CONFIG = {
  // Formspree endpoint
  endpoint: "https://formspree.io/f/xzdaodaw",

  // Form fields - add, remove, or modify as needed
  // Types: "text", "email", "textarea"
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      required: true
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "your@email.com",
      required: true
    },
    {
      name: "domain",
      label: "Domain / Field",
      type: "text",
      placeholder: "e.g. Strategy consultant, Engineer, Designer, Lawyer...",
      required: true
    },
    {
      name: "methodology",
      label: "Describe your methodology",
      type: "textarea",
      placeholder: "How do you actually approach problems? What's your way of working that others don't see?",
      required: true
    },
    {
      name: "leverage",
      label: "Where would a thinking agent have the highest leverage? (optional)",
      type: "text",
      placeholder: "e.g. Client discovery, complex diagnosis, strategic planning...",
      required: false
    }
  ],

  // Button and messages
  submitText: "Request Access",
  submittingText: "Sending...",
  successMessage: "Thanks! We'll be in touch.",
  errorMessage: "Error - try again"
};
