const Footer = () => {
  return (
    <footer className="footer p-10 border-t">
      <div>
        <div className="flex items-center">
          <img src="/logo.png" alt="Website Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-white text-lg font-semibold">Sunnah Camp</h1>
        </div>
        <div className="text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Contact us: info@summercamp.com</p>
          <p>123 Main Street, Dhaka, Bangladesh</p>
        </div>
      </div>

      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
