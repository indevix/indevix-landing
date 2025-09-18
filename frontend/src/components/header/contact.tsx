"use client";

import { Button } from "@ui/button";
import { ReactNode, useState } from "react";
import { ContactSidebar } from "./contact-sidebar";
import { createPortal } from "react-dom";

export function Contact({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        className="text-sm md:text-base px-5 py-[10px] mx-[10px] h-[40px] md:h-[50px]"
        onClick={handleOpenModal}
      >
        {children}
      </Button>

      {typeof window !== "undefined" &&
        createPortal(
          <ContactSidebar isOpen={isModalOpen} onClose={handleCloseModal} />,
          document.getElementById("modal-root")!
        )}
    </>
  );
}
