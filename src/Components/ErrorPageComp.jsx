/* eslint-disable no-unused-vars */
import React from 'react'
import '../error.css'
export default function ErrorPageComp() {
  return (
    <div>
   <div className="error-page">
      <div className="container text-center">
        <img src="/SERES-DFSK-logo.png" alt="DFSK SERES Logo" className="img-fluid error-logo" />
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-message">The page you are looking for might be temporarily unavailable or does not exist.</p>
      </div>
    </div>
  </div>
  )
}
