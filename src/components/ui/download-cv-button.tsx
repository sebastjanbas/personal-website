"use client";
import React from "react";
import { toast } from "sonner";

const DownloadCVButton = () => {
  const handleClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://docs.google.com/document/d/1peoHs2uNtDp4bT8fS7wZnrPKTzGBYnTQbRC7RwZrg1k/export?format=pdf"
    downloadLink.download = "CV.pdf";
    document.body.appendChild(downloadLink);

    // Trigger the toast promise immediately when download starts
    const toastId = toast.loading("Downloading Resume...");

    // Trigger the download
    downloadLink.click();

    // Now wait until the user confirms the download (by clicking "Save")
    const checkDownloadConfirmed = () => {
      // Detect if user confirmed the download (after closing the Finder dialog)
      if (navigator.userActivation?.isActive) {
        // This means the user interacted with the file dialog
        toast.dismiss(toastId); // Dismiss loading toast
        toast("Thank you for downloading my resume!");
      } else {
        // Keep checking until the user confirms the download
        requestAnimationFrame(checkDownloadConfirmed);
      }
    };

    // Start polling for user confirmation
    checkDownloadConfirmed();

    // Cleanup
    document.body.removeChild(downloadLink);
  };  return <button onClick={handleClick}>&darr; Download CV</button>;
};

export default DownloadCVButton;
