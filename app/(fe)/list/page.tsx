"use client";
import { SetStateAction, useState } from "react";
import FilterBar from "./components/FilterBar";
import Property from "./components/Property";



export default function List() {
  return (
    <main className="min-h-screen flex justify-center mt-10">
      <div className="container grid gap-6 grid-cols-1 lg:grid-cols-5 px-4 md:px-0">
        <FilterBar />
        <Property />
      </div>
    </main>
  );
}
