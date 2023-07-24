import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Statistics from './Statistics'
import Boost from './Boost'
import Footer from './Footer'

function App() {

  const [url, setUrl] = useState('')
  const [shortenUrls, setShortenUrls] = useState([])

  const addUrl = async (url) => {
    const newUrl = {
      original: url,
      id: nanoid(),
      url: await shortenApi(url),
      isCopied: false
    }

    const newUrls = [...shortenUrls, newUrl]

    setShortenUrls(newUrls)
  }

  const shortenApi = async (url) => {
    try {
      const URL = `https://api.shrtco.de/v2/shorten?url=${url}`
      const response = await fetch(URL)
      const data = await response.json()
      const shortLink = data.result.short_link
      return shortLink

    } catch (error) {
      console.log(error)
    }
  }

  const removeAllUrls = () => {
    setShortenUrls([])
    setUrl('')
  }

  const saveToClipBoard = async (savedUrl) => {
    try {
      await navigator.clipboard.writeText(savedUrl) 

      const newUrls = shortenUrls.map(item => {
        if (item.url === savedUrl) {
          const updatedItem = {...item, isCopied: true}
          return updatedItem
        }
        return item
      })

      setShortenUrls(newUrls)
      
      setTimeout(() => resetIsCopy(savedUrl), 3000)

    } catch (error) {
      console.log(error)
    }
  } 

  const resetIsCopy = (resetUrl) => {
    const resetUrls = shortenUrls.map(url => {
      if (url === resetUrl) {
        const resetUrl = {...url, isCopied: false}
        return resetUrl
      }
      return url
    })

    setShortenUrls(resetUrls)
  }

  return (
    <main>
      <Navbar />
      <Header />
      <Statistics 
        url={url}
        setUrl={setUrl}
        setShortenUrls={setShortenUrls}
        shortenUrls={shortenUrls}
        addUrl={addUrl}
        removeAllUrls={removeAllUrls}
        saveToClipBoard={saveToClipBoard}
      />
      <Boost />
      <Footer />
    </main>
  )
}

export default App
