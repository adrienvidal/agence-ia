"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/lib/contact-modal-context";
import { useScrollVisibility } from "@/lib/use-scroll-visibility";

export function StickyCtaBar() {
  const visible = useScrollVisibility(500);
  const { openModal } = useContactModal();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 md:hidden"
        >
          <div className="bg-background/90 backdrop-blur-xl border-t border-border/40 px-4 py-3">
            <button
              onClick={openModal}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-full cta-btn px-6 py-3.5 text-sm font-medium text-primary-foreground cursor-pointer"
            >
              Réserver mon audit gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
