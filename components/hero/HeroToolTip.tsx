import { Link } from "@nextui-org/link";
import React from "react";

const HeroToolTip = () => {
  return (
    <ul className="example-2">
      <li className="icon-content">
        <Link
          href="https://www.linkedin.com/in/shoaib-hossain-5bb080236/"
          aria-label="LinkedIn"
          data-social="linkedin"
          isExternal
        >
          <div className="filled"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
            xmlSpace="preserve"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <div className="tooltip">Stalk</div>
      </li>
      <li className="icon-content">
        <Link
          href="https://github.com/hossain101"
          aria-label="GitHub"
          data-social="github"
          isExternal
        >
          <div className="filled"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
            xmlSpace="preserve"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <div className="tooltip">Admire</div>
      </li>

      <li className="icon-content">
        <Link
          href="https://wa.me/+8801685176228?text=Hi,%20Shoaib!"
          aria-label="WhatsApp"
          data-social="whatsapp"
          isExternal
        >
          <div className="filled"></div>
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-300.000000, -7599.000000)"
                  fill="#4d4d4d"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                      id="whatsapp-[#128]"
                      fill="currentColor"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>
        <div className="tooltip">Chat</div>
      </li>

      <li className="icon-content">
        <Link
          href="mailto:shoaibhossain24@gmail.com?subject=You%20Are%20Hired!"
          aria-label="email"
          data-social="email"
          isExternal
        >
          <div className="filled"></div>
          <svg
            fill="#currentColor"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            className=""
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21,11c0,6.7-4.3,6.4-4.8,6.4c-0.6,0-1.1-0.1-1.6-0.4c-0.4-0.3-0.8-0.6-1-1.1c-0.4,0.5-0.8,0.9-1.3,1.1 c-0.5,0.3-1,0.4-1.6,0.4c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.6-1-1c-0.3-0.4-0.5-0.9-0.6-1.5c-0.1-0.6-0.1-1.3-0.1-2 c0.1-0.9,0.3-1.7,0.6-2.5c0.3-0.7,0.7-1.4,1.1-1.9c0.4-0.5,0.9-0.9,1.5-1.2c0.6-0.3,1.2-0.4,1.8-0.4c2,0,3.1,1,3.3,1.2L15.4,14 c0,0.4-0.2,1.8,1.1,1.8c0.4,0,2.4-0.5,2.4-4.7c0-0.1,0.9-7-6.6-7C6.3,4,5,9.9,5,12c0,8.4,5.3,8,7,8c2,0,3.1-0.4,3.3-0.5l0.4,1.8 C15.5,21.5,14.5,22,12,22c-3.1,0-9-0.1-9-10c0-1.4,0.8-10,9.5-10C20.8,2,21,9.6,21,11z M10.1,12.6c-0.1,0.9,0,1.7,0.2,2.2 c0.2,0.5,0.6,0.7,1.2,0.7c1.1,0,1.7-1.4,1.8-1.8l0.5-5.1c-0.1,0-0.7-0.1-0.9-0.1c-0.8,0-1.5,0.4-1.9,1.1 C10.5,10.2,10.2,11.2,10.1,12.6z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </Link>
        <div className="tooltip">Old</div>
      </li>
    </ul>
  );
};

export default HeroToolTip;
