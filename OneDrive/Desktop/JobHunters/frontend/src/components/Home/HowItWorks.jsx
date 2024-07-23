import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdFindInPage } from "react-icons/md";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobHunter Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Start your career journey! Create an account to explore opportunities.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Land your dream job or find top talent. Start your search today!
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Fill your team with talent. Start recruiting today.
              <p> Ready to take the next step? Apply for jobs now.</p>
             
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;