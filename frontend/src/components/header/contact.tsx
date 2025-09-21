"use client";

import { Button } from "@ui/button";
import { ReactNode, useState } from "react";
import { ContactSidebar } from "./contact-sidebar";

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
      <ContactSidebar isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
