"use client";

import Button from "@/app/components/Button";
import { FilePlusIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1 items-center justify-center gap-3">
        <h1>Welcome to Truss Tool</h1>
        <Button 
          title="Create a new project" 
          text="Create a new project" 
          icon={FilePlusIcon} path="/new" />
      </main>

      <footer className="nav_right items-end h-24">
        <p>Made by <a href="https://github.com/caaef" target="_blank">caef</a></p>
      </footer>
    </>
  );
}
