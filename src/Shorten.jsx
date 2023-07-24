import { useState } from "react"

const Shorten = ({url, setUrl, addUrl, removeAllUrls}) => {

  const [showAlert, setShowAlert] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!url) {
      setShowAlert(true)
      return
    }

    addUrl(url)
    setShowAlert(false)
    setUrl('')
  }

  const alertInput = showAlert ? 'alert' : ''

  return (
    <form className="input-form" onSubmit={handleFormSubmit}>
      <div className="input-text">
        <input 
          type="text" 
          placeholder="Shorten a link here..."
          className={`input-url ${alertInput}`}
          style={{ 
            border: showAlert ? '3px solid red' : 'none' 
          }}
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <small className="show-alert"><em>{showAlert ? 'Please add a link' : ''}</em></small>
      </div>
      <button type="submit" className="btn shorten-btn">Shorten It!</button>
      <button 
        type="button" 
        className="btn clear-btn" 
        onClick={removeAllUrls}
      >
        Clear All
      </button>
      
    </form>
  )
}
export default Shorten