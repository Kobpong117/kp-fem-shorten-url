const Header = () => {
  return (
    <section className="header-section">
        <div className="header-image-container">
            <img src="../images/illustration-working.svg" alt="illustration-working" className="header-image" />
        </div>
        <div className="title">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="btn">get started</button>
        </div>
    </section>
  )
}
export default Header