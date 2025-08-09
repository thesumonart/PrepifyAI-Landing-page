const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Twitter = ({ className, ...props }) => (
    <svg
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
    >
      <path
        d="M18 1.73969C17.325 2.04897 16.6125 2.24227 15.8625 2.35825C16.6125 1.89433 17.2125 1.15979 17.475 0.270619C16.7625 0.695876 15.975 1.00515 15.1125 1.19845C14.4375 0.463918 13.4625 0 12.4125 0C10.3875 0 8.7375 1.70103 8.7375 3.78866C8.7375 4.09794 8.775 4.36856 8.85 4.63918C5.8125 4.48454 3.075 2.9768 1.2375 0.657216C0.9375 1.23711 0.75 1.85567 0.75 2.55155C0.75 3.86598 1.3875 5.02577 2.4 5.72165C1.8 5.68299 1.2375 5.52835 0.7125 5.25773V5.29639C0.7125 7.15206 1.9875 8.69845 3.675 9.04639C3.375 9.12371 3.0375 9.16237 2.7 9.16237C2.475 9.16237 2.2125 9.12371 1.9875 9.08505C2.475 10.5928 3.825 11.7139 5.4375 11.7139C4.1625 12.7191 2.5875 13.3376 0.8625 13.3376C0.5625 13.3376 0.2625 13.3376 0 13.299C1.65 14.3814 3.5625 15 5.6625 15C12.45 15 16.1625 9.20103 16.1625 4.17526C16.1625 4.02062 16.1625 3.82732 16.1625 3.67268C16.875 3.1701 17.5125 2.51289 18 1.73969Z"
        fill="currentColor"
      />
    </svg>
  );

  const Facebook = ({ className, ...props }) => (
    <svg
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M18.2083 0H0.791667C0.354441 0 0 0.354441 0 0.791667V18.2083C0 18.6456 0.354441 19 0.791667 19H10.1485V11.6422H7.67244V8.77473H10.1485V6.66005C10.1485 4.20597 11.6474 2.86968 13.8366 2.86968C14.8852 2.86968 15.7865 2.94776 16.0491 2.98265V5.5473L14.5308 5.54799C13.3402 5.54799 13.1097 6.11375 13.1097 6.94397V8.77473H15.9492L15.5794 11.6422H13.1097V19H18.2083C18.6456 19 19 18.6456 19 18.2083V0.791667C19 0.354441 18.6456 0 18.2083 0Z"
        fill="currentColor"
      />
    </svg>
  );

  const Instagram = ({ className, ...props }) => (
    <svg
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.58323 0.057C6.59656 0.0110833 6.91996 0 9.5 0C12.08 0 12.4034 0.0110833 13.4168 0.057C14.9613 0.127458 16.317 0.505875 17.4056 1.59442C18.4945 2.68335 18.8725 4.03948 18.943 5.58323C18.9889 6.59656 19 6.91996 19 9.5C19 12.08 18.9889 12.4034 18.943 13.4168C18.8725 14.9613 18.4941 16.317 17.4056 17.4056C16.3166 18.4945 14.9601 18.8725 13.4168 18.943C12.4034 18.9889 12.08 19 9.5 19C6.91996 19 6.59656 18.9889 5.58323 18.943C4.03869 18.8725 2.68296 18.4941 1.59442 17.4056C0.505479 16.3166 0.127458 14.9605 0.057 13.4168C0.0110833 12.4034 0 12.08 0 9.5C0 6.91996 0.0110833 6.59656 0.057 5.58323C0.127458 4.03869 0.505875 2.68296 1.59442 1.59442C2.68335 0.505479 4.03948 0.127458 5.58323 0.057ZM13.3388 1.767C12.3369 1.72108 12.0365 1.71158 9.5 1.71158C6.9635 1.71158 6.66306 1.72148 5.66121 1.767C4.58019 1.81648 3.57675 2.033 2.80487 2.80487C2.033 3.57675 1.81648 4.58019 1.767 5.66121C1.72108 6.66306 1.71158 6.9635 1.71158 9.5C1.71158 12.0365 1.72148 12.3369 1.767 13.3388C1.81648 14.4198 2.033 15.4233 2.80487 16.1951C3.57675 16.967 4.58019 17.1835 5.66121 17.233C6.66267 17.2789 6.9631 17.2884 9.5 17.2884C12.0369 17.2884 12.3373 17.2785 13.3388 17.233C14.4198 17.1835 15.4233 16.967 16.1951 16.1951C16.967 15.4233 17.1835 14.4198 17.233 13.3388C17.2789 12.3369 17.2884 12.0365 17.2884 9.5C17.2884 6.9635 17.2785 6.66306 17.233 5.66121C17.1835 4.58019 16.967 3.57675 16.1951 2.80487C15.4233 2.033 14.4198 1.81648 13.3388 1.767Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.18164 9.93164C5.18164 7.30843 7.30804 5.18164 9.93164 5.18164C12.5552 5.18164 14.6816 7.30804 14.6816 9.93164C14.6816 12.5552 12.5552 14.6816 9.93164 14.6816C7.30804 14.6816 5.18164 12.5549 5.18164 9.93164ZM6.84823 9.93164C6.84823 11.6345 8.22883 13.0151 9.93164 13.0151C11.6345 13.0151 13.0151 11.6345 13.0151 9.93164C13.0151 8.22883 11.6345 6.84823 9.93164 6.84823C8.22883 6.84823 6.84823 8.22883 6.84823 9.93164Z"
        fill="currentColor"
      />
      <circle cx="14.2505" cy="4.75004" r="1.29545" fill="currentColor" />
    </svg>
  );

  const LinkedIn = ({ className, ...props }) => (
    <svg
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.791667 0H18.2083C18.6438 0 19 0.35625 19 0.791667V18.2083C19 18.6438 18.6438 19 18.2083 19H0.791667C0.35625 19 0 18.6438 0 18.2083V0.791667C0 0.35625 0.35625 0 0.791667 0ZM2.81042 16.1896H5.62083V7.125H2.81042V16.1896ZM4.23542 5.89792C3.325 5.89792 2.6125 5.18542 2.6125 4.275C2.6125 3.36458 3.325 2.65208 4.23542 2.65208C5.14583 2.65208 5.85833 3.36458 5.85833 4.275C5.85833 5.14583 5.14583 5.89792 4.23542 5.89792ZM13.3792 16.1896H16.15V11.2021C16.15 8.74792 15.6354 6.8875 12.7854 6.8875C11.4396 6.8875 10.4896 7.63958 10.1333 8.35208H10.0938V7.125H7.40208V16.1896H10.2125V11.7167C10.2125 10.5292 10.45 9.38125 11.9146 9.38125C13.3792 9.38125 13.3792 10.7271 13.3792 11.7958V16.1896Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-200 py-20 md:pt-[120px] md:pb-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section) => (
            <div key={section.title}>
              <h4 className="text-black-primary/70 mb-5 text-sm md:text-[15px]">
                {section.title}
              </h4>
              <ul className="space-y-2 text-base md:text-[17px] text-black-primary leading-loose">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.type === "button" ? (
                      <button
                        onClick={() => scrollToSection(link.sectionId)}
                        className="hover:text-gray-900 transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className={
                          link.className ||
                          "hover:text-gray-900 transition-colors"
                        }
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stroke-primary mt-12 pt-8 flex md:flex-row justify-between items-center">
          <p className="text-[15px] text-black-primary tracking-[-0.1px] leading-relaxed">
            &copy;&nbsp;
            {new Date().getFullYear()} Prepify AI, LLC
          </p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-black-primary/40 hover:text-blue-primary/100 transition-colors"
              >
                <Twitter fill="currentColor" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black-primary/40 hover:text-blue-primary/100 transition-colors"
              >
                <Facebook fill="currentColor" className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-black-primary/40 hover:text-blue-primary/100 transition-colors"
              >
                <Instagram fill="currentColor" className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-black-primary/40 hover:text-blue-primary/100 transition-colors"
              >
                <LinkedIn fill="currentColor" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerData = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", type: "button", sectionId: "features" },
      { label: "Pricing", type: "button", sectionId: "pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Contact us",
    links: [
      {
        label: "prepifyai@gmail.com",
        href: "mailto:prepifyai@gmail.com",
        className: "text-blue-primary",
      },
    ],
  },
];
