import React from "react"

const Form = () => {
  return (
    <div>
    <form className="form-container" action="https://getform.io/f/d151f3cf-3ccf-4e03-b78b-51f31cbd8279" method="POST">
      <h2>join the Wrenviews newsletter!</h2>
      <p>get a short little email whenever i post a review!
        <br/><br/>
        i won't:
          <li>sell your email to big pharma (or anyone else, or probably even look at it)</li>
          <li>be creepy and save your name in a notebook or something (use a fake name if you want idc)</li>
          <li>spam you with random messages (i'll only send messages when new reviews come out)</li>
          <br></br>
        i will:
          <li>send you concise emails whenever i get a review posted so you can read it or something!</li>
          <li>feel good about myself cause people are signing up for my passion project's newsletter :DD</li>
        <br/>
        just type in your name and email below and you'll be registered! :D
      </p>
      <br/>
      <div>
        <label htmlFor="w3lName">First Name</label>
        <input type="text" name="FName" id="FName"/>
      </div>
      <div>
        <label htmlFor="w3lSender">Email</label>
        <input type="email" name="Email" id="email"/>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <input type="submit" className="button -primary" style={{marginRight: 0}} />
      </div>
    </form>
  </div>
  )
}

export default Form