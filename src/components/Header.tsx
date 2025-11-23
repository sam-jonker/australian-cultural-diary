import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="block">
          <h1 className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
            Sam's Australian Culture Diary
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Observations and reflections on Australian culture from down under...
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
