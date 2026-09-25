import Link from "next/link";

export default function Home() {
  const pages = [
    { name: "Ride-Share Trip Details (Mobile)", path: "/ride-trip-details" },
    { name: "Art Showcase Landing", path: "/art-showcase" },
    { name: "Developer Portfolio Landing", path: "/developer-portfolio" },
    { name: "Finance Dashboard Landing", path: "/finance-landing" },
    { name: "Real Estate Investment Landing", path: "/real-estate-landing" },
    { name: "Travel App Landing", path: "/travel-landing" },
    { name: "Pricing Plans", path: "/pricing-plans" },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-50">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">UI/UX Reference Designs</h1>
        <p className="mb-8 text-slate-600">
          This project contains pixel-consistent recreations of 7 reference designs. 
          Both desktop and mobile responsiveness have been integrated.
        </p>
        
        <div className="grid gap-4">
          {pages.map((page) => (
            <Link 
              key={page.path}
              href={page.path}
              className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <span className="font-medium text-slate-900">{page.name}</span>
              <span className="text-slate-400 group-hover:text-slate-900 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
