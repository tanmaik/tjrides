"use client";
import { useState } from "react";

export default function CreateRide({ submitRide }) {
  return (
    <form className="flex flex-col">
      <input type="number" className="border" />
      <input type="text" className="border" />
    </form>
  );
}
