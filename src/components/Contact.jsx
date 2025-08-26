import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <div className="my-4">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b hover:text-blue-400 transition"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
