import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  // Debounce search input
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [query, onSearch]);

  return (
    <Form.Control
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
}
