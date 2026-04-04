import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Map, Phone, HelpCircle } from "lucide-react";
import { updatePageSEO, pageSEOConfig } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    updatePageSEO({
      ...pageSEOConfig.notFound,
      canonicalUrl: "https://battletechgaming.com/404",
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface-dark carbon-texture pt-20 px-4">
      {/* Main 404 Content */}
      <div className="text-center max-w-md mb-12">
        <div className="mb-6">
          <h1 className="font-heading text-7xl md:text-8xl font-bold text-primary mb-2">
            404
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
          The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Helpful Links */}
        <div className="space-y-3 mb-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading tracking-wider hover:bg-primary/90 transition-colors w-full"
          >
            <Home size={18} />
            BACK TO HOME
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-heading tracking-wider hover:bg-secondary/90 transition-colors w-full"
          >
            <Phone size={18} />
            CONTACT SUPPORT
          </Link>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Link
            to="/"
            className="glass-card p-3 text-center hover:border-primary/50 transition-colors"
          >
            <Home size={20} className="mx-auto mb-2 text-primary" />
            <p className="font-heading text-xs tracking-wider">Home</p>
          </Link>

          <Link
            to="/setups"
            className="glass-card p-3 text-center hover:border-primary/50 transition-colors"
          >
            <HelpCircle size={20} className="mx-auto mb-2 text-primary" />
            <p className="font-heading text-xs tracking-wider">Setups</p>
          </Link>

          <Link
            to="/about"
            className="glass-card p-3 text-center hover:border-primary/50 transition-colors"
          >
            <Map size={20} className="mx-auto mb-2 text-primary" />
            <p className="font-heading text-xs tracking-wider">About</p>
          </Link>

          <Link
            to="/contact"
            className="glass-card p-3 text-center hover:border-primary/50 transition-colors"
          >
            <Phone size={20} className="mx-auto mb-2 text-primary" />
            <p className="font-heading text-xs tracking-wider">Contact</p>
          </Link>
        </div>
      </div>

      {/* Additional Help Text */}
      <div className="max-w-md text-center mt-8 text-xs md:text-sm text-muted-foreground">
        <p className="mb-2">Need help? Reach out to us:</p>
        <p>
          <strong>Phone:</strong> <a href="tel:+919660034000" className="text-primary hover:underline">+91 9660034000</a>
        </p>
        <p>
          <strong>Hours:</strong> 9 AM – 9 PM daily
        </p>
      </div>
    </div>
  );
};

export default NotFound;
