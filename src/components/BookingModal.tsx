"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { BookingForm } from "./BookingForm";
import { Button, ButtonProps } from "./Button";
import { X, Shield } from "./Icon";

interface BookingModalContextType {
  isOpen: boolean;
  prefilledCourse: string;
  openBookingModal: (options?: { course?: string }) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}

export function BookingButton({
  children,
  course,
  variant = "primary",
  size = "lg",
  className = "",
  href = "/book",
}: {
  children: React.ReactNode;
  course?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  href?: string;
}) {
  const { openBookingModal } = useBookingModal();
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      className={className}
      onClick={() => openBookingModal({ course })}
    >
      {children}
    </Button>
  );
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState("");
  const pathname = usePathname();
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openBookingModal = useCallback(
    (options?: { course?: string }) => {
      // On /contact, scroll smoothly to the on-page form instead of opening a modal
      if (pathname === "/contact") {
        const contactForm =
          document.getElementById("send-enquiry") ||
          document.getElementById("booking-form") ||
          document.querySelector("form");
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // Store triggering element for focus restoration
      if (typeof document !== "undefined") {
        triggerRef.current = document.activeElement as HTMLElement;
      }

      setPrefilledCourse(options?.course || "");
      setIsOpen(true);
    },
    [pathname]
  );

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
    // Restore focus to triggering element
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  // Close modal automatically if route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeBookingModal();
        return;
      }

      if (e.key === "Tab" && modalContentRef.current) {
        const focusableElements = modalContentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBookingModal]);

  // Body scroll lock without layout shift
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Auto focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        prefilledCourse,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}

      {/* Reusable Booking Form Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeBookingModal();
            }
          }}
        >
          <div
            ref={modalContentRef}
            className="relative w-full max-w-2xl my-auto rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92dvh] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 sm:px-8 sm:py-5 bg-slate-50/80">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--red)]">
                  <Shield className="h-3.5 w-3.5" />
                  <span>London W9 · West & NW Routes</span>
                </div>
                <h2
                  id="booking-modal-title"
                  className="mt-0.5 text-lg sm:text-xl font-black text-[var(--navy)]"
                >
                  Request a Driving Lesson
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeBookingModal}
                aria-label="Close booking form modal"
                className="grid h-11 w-11 place-items-center rounded-full text-slate-400 hover:bg-slate-200/60 hover:text-[var(--navy)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body Container with Smooth Internal Scroll */}
            <div className="overflow-y-auto overscroll-contain p-4 sm:p-6 flex-1">
              <BookingForm initialCourse={prefilledCourse} isModal={true} />
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}
