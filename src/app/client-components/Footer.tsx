"use client";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 text-gray-700 text-sm">
      <div className="max-w-7xl  px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Get help with a safety issue</a></li>
            <li><a href="#" className="hover:underline">AirCover</a></li>
            <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
            <li><a href="#" className="hover:underline">Disability support</a></li>
            <li><a href="#" className="hover:underline">Cancellation options</a></li>
            <li><a href="#" className="hover:underline">Report neighborhood concern</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Airbnb your home</a></li>
            <li><a href="#" className="hover:underline">Airbnb your experience</a></li>
            <li><a href="#" className="hover:underline">Airbnb your service</a></li>
            <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
            <li><a href="#" className="hover:underline">Hosting resources</a></li>
            <li><a href="#" className="hover:underline">Community forum</a></li>
            <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            <li><a href="#" className="hover:underline">Airbnb-friendly apartments</a></li>
            <li><a href="#" className="hover:underline">Join a free Hosting class</a></li>
            <li><a href="#" className="hover:underline">Find a co-host</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold mb-3">Airbnb</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">2025 Summer Release</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Gift cards</a></li>
            <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
    
          <p className="text-xs text-gray-500">
            © 2025 Airbnb, Inc. · <a href="#" className="hover:underline">Terms</a> ·{" "}
            <a href="#" className="hover:underline">Sitemap</a> ·{" "}
            <a href="#" className="hover:underline">Privacy</a> ·{" "}
            <a href="#" className="hover:underline">Your Privacy Choices</a>
          </p>

          
          <div className="flex items-center gap-4 text-gray-600">
            <button className="flex items-center gap-1 hover:underline text-sm">
              🌍 English (US)
            </button>
            <button className="hover:underline text-sm">$ USD</button>
            <div className="flex items-center gap-3 text-lg">
              <a href="#" className="hover:text-black">📘</a>
              <a href="#" className="hover:text-black">🐦</a>
              <a href="#" className="hover:text-black">📸</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
