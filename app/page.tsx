"use client";

import Button from "@/app/components/Button";
import { FilePlusIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <div className="h-24"></div>
      
      <main className="flex flex-col flex-1 items-center justify-center gap-4">
        <h1>Welcome to Truss Tool</h1>
        <Button 
          title="Create a new project" 
          text="Create a new project" 
          icon={FilePlusIcon} path="/new" />
      </main>

      <footer className="items-end h-24 flex justify-end">
        <p>Made by <a href="https://github.com/caaef" target="_blank">caef</a></p>
      </footer>
    </>
  );
}
