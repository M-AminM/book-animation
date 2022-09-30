import Book from "../components/book/book";
import { useState, useEffect } from "react";
import Cover from "../components/cover/cover";
import { isLower991 } from "../components/useWidth";

export default function Home() {
  const show = isLower991();

  return <>{show ? <Cover /> : <Book />}</>;
}
