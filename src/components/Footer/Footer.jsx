const Footer = () => {
  return (
    <footer className="bg-white text-[#383838] py-8 font-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Block: Logo, Text, and Social Icons */}
        <div className="flex flex-col items-start">
          <img
            src="/src/assets/logo/EyeGlass.png"
            alt="OptiChroma Logo"
            className="mb-4"
          />
          <p className="mb-4">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/src/assets/logo/linkedin.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/src/assets/logo/Instagram.png" alt="" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/src/assets/logo/twitter.png" alt="" />
            </a>
          </div>
        </div>

        {/* Second Block: Support Links */}
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Terms & condition
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Products FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Company Support
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Manage Account of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Third Block: Company Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="/aboutus" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Blog Post
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Product Features
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Company Info
              </a>
            </li>
            <li>
              <a href="/affiliates" className="hover:underline">
                Company Info
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Block: Resources Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Become an affiliate Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Product FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Our Forums
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Product API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between container mx-auto ">
        <div className="">
          <small>Copyright &copy; 2023 All rights reserved by Eyeglass</small>
        </div>
        <div className="flex gap-2  justify-end">
          <a href="/guides" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/guides" className="hover:underline">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
