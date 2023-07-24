import { messages } from './data'

const Content = () => {
  return (
    <div className='content'>
        {messages.map(message => {
            const {id, icon, title, text} = message
            return (
                <article key={id} className='content-card'>
                    <img src={icon} alt={title} className='content-icon' />
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
            )
        })}
    </div>
  )
}
export default Content