"use client";

import dynamic from "next/dynamic";

const ContactModal = dynamic(
  () => import("@/components/ContactModal").then((m) => ({ default: m.ContactModal })),
  { ssr: false },
);

export function ModalContainer() {
  return <ContactModal />;
}
