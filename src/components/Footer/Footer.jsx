
const Footer = () => {
  return (
    <footer className="bg-white py-8 font-primary">
      <div className="container mx-auto flex flex-wrap lg:justify-between text-[#383838]">
        {/* Logo Block: Logo, Text, and Social Icons */}
        <div className="flex flex-col items-start lg:w-[349px] mb-8 lg:mb-0 p-2">
          <img
            width={150}
            src="/src/assets/logo/EyeGlass.png"
            alt="OptiChroma Logo"
            className="mb-4"
          />
          <p className="mb-4 font-primary text-[16px] font-normal leading-[26px]">
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
              <img src="/src/assets/logo/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/src/assets/logo/Instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <img src="/src/assets/logo/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Links Block */}
        <div className="flex flex-wrap gap-20 lg:gap-[140px] p-2 justify-end w-full lg:w-auto">
          {/* Support Links */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h4 className="font-bold text-[20px] leading-[30px] font-primary mb-4">
              Support
            </h4>
            <ul className="font-normal text-[16px] leading-[26px]">
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

          {/* Quick Links */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h4 className="font-bold text-[20px] leading-[30px] font-primary mb-4">
              Quick Links
            </h4>
            <ul className="font-normal text-[16px] leading-[26px]">
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
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-auto mb-8 lg:mb-0">
            <h4 className="font-bold text-[20px] leading-[30px] font-primary mb-4">
              Resources
            </h4>
            <ul className="font-normal text-[16px] leading-[26px]">
              <li>
                <a href="/" className="hover:underline">
                  Become an Affiliate
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
      </div>
      <hr className="my-6 border-1 border-[#FED29C]" />
      <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto text-[#545454]">
        <div className="mb-4 lg:mb-0">
          <small className="font-normal text-[16px] leading-[26px]">
            Copyright &copy; 2023 All rights reserved by Eyeglass
          </small>
        </div>
        <div className="flex gap-x-12">
          <a
            href="/guides"
            className="hover:underline font-normal text-[16px] leading-[26px]"
          >
            Privacy Policy
          </a>
          <a
            href="/guides"
            className="hover:underline font-normal text-[16px] leading-[26px]"
          >
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
