import React from "react";
export default function MyNav() {
    return(
        <div className="w-full z-[1]">
        <nav className="w-full sticky top-0 pt-5 px-10 pb-1 flex justify-between z-50 backdrop-blur-sm">
          <div className="font-semibold text-2xl font-md">thirtysixstudios</div>
          <div className="links flex gap-10">
            {[
              "What we do",
              "Who we are",
              "How we give back",
              "Talk to us",
            ].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-md hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </div>
    )
}