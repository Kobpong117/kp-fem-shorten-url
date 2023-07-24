import { useState } from "react"
import { useWindowSize } from "@uidotdev/usehooks";
import Content from "./Content"
import Shorten from "./Shorten"

const Statistics = ({ url, setUrl, shortenUrls, addUrl, removeAllUrls, saveToClipBoard }) => {
  
  // console.log(shortenUrls)
  const size = useWindowSize();

  return (
    <section className="statistics-section">
      <div className="shorten-section">
        <Shorten url={url} setUrl={setUrl} addUrl={addUrl} removeAllUrls={removeAllUrls}/>
          {shortenUrls && shortenUrls.map(item => {
            const {id, original, url, isCopied} = item
            return (
              <article className="shorten-url-card" key={id}>
                <p className="original-url">{(original && size.width <= 766 && original.substring(0,25)) || (original && size.width > 766 && original.substring(0,32))}...</p>
                <div className="shorten-copy">
                  <p className="shorten-url">{url}</p>
                  <button 
                    className={`btn btn-copy`} 
                    onClick={() => saveToClipBoard(url)}
                    style={{backgroundColor: isCopied ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)"}}
                  >
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </article>
            )
          })}
      </div>    
      <h2>advanced statistics</h2>
      <p className="text">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <Content />
    </section>
  )
}
export default Statistics