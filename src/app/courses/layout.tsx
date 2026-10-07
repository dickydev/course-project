export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header
        className="
            border-b
            bg-slate-50
            px-6
            py-4
            text-black
          "
      >
        <h2
          className="
              font-semibold
              
            "
        >
          Learning Center
        </h2>
      </header>

      {children}
    </div>
  );
}
