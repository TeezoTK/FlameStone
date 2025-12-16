import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <img 
              src="https://static.readdy.ai/image/085e3e8e8fae5c3c13c744935514087c/6e5dc2c5dbadb1751d076debbf11fa47.png" 
              alt="Flame & Stone Pizza"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm italic text-gray-400 mb-6">
              Stone-baked perfection in Princes Risborough
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-flame-orange transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-flame-orange transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-flame-orange text-sm font-bebas tracking-wider mb-6">NAVIGATE</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Order
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-flame-orange text-sm font-bebas tracking-wider mb-6">INFORMATION</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Allergen Info
                </a>
              </li>
              <li>
                <a href="#" className="text-off-white hover:text-flame-orange transition-colors duration-300 text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-flame-orange text-sm font-bebas tracking-wider mb-6">CONTACT</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p className="text-off-white">14 High Street<br />Princes Risborough<br />HP27 0AX</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone (Collection / Help)</p>
                <a href="tel:01844345000" className="text-flame-orange hover:underline cursor-pointer">
                  01844 345000
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a href="mailto:info@flameandstonepizza.co.uk" className="text-flame-orange hover:underline cursor-pointer">
                  info@flameandstonepizza.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Allergen Notice */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <p className="text-center text-gray-400 text-xs">
            <i className="ri-alert-line text-flame-orange"></i> If you have allergies or intolerances, please contact us before ordering
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2025 Flame & Stone Pizza. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>Made with</span>
            <i className="ri-fire-fill text-flame-orange"></i>
            <span>in Buckinghamshire</span>
            <span className="mx-2">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
