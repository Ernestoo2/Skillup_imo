import "./css/Header.css";
import React, { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleChange = (e) => {
    const inputEmail = e.target.value
    setEmail(inputEmail)
    setIsValid(validateEmail(inputEmail) || inputEmail === '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      console.log('Email submitted:', email)
      // Here you would typically send the email to your server
    } else {
      setIsValid(false)
    }
  }
  return (
    <div className="container-H max-w-auto pb-8">
      <header className=" header flex ">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />

        <nav className="nav">
          <button className="btn-1 bg-[#e50914]">Sign in</button>
        </nav>
      </header>
      <div className="pwrap">
        <em className=" md:text-[16px] lg:text-[20px]">
          Unlimited Movies, TV <br />
          Shows, and more.
        </em>
        <p>starts at <span className="text line-through">N</span>2,200. Cancel anytime </p>

        <h5 className="h5class justify-center">
          Ready to watch? Enter your email to create or
          restart your membership.
        </h5>
      </div>
      <div className="Form pl-[15%] mb-[50px] ">
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto mt-1">
          <input
            type="email"
            id="emailm"
            value={email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              !isValid ? 'border-red-500' : ''
            }`}
            placeholder="you@example.com"
          />

          <div className="subButton pl-2 ">
            <button
              type="submit"
              className=" bg-[#e50914] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Getting Started
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header
