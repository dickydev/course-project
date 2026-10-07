'use client';

import { useState, useEffect } from 'react';

export default function SearchCourse() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = search ? `Search : ${search}` : 'Course Catalog';
  }, [search]);

  return (
    <input
      className="bg-white border-2 border-red-500"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
