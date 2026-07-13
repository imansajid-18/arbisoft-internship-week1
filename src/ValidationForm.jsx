import {useState} from 'react'
function ValidationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) {
      setErrors('Please fill in all fields')
    }
    else {
      setErrors("")
      console.log('Form submitted successfully', { name, email })
      alert('Form submitted successfully')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Validation Form</h2>
        <label>
          Name:
          <input type="text"
           placeholder='Enter your name'
           value={name}
           onChange={(e) => setName(e.target.value)}
           />
        </label>
        <br />
        <label>
          Email:
          <input type="email" 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ValidationForm
