import Footer from './Footer.jsx'

// Greenwave-styled wrapper for the legal documents (privacy & terms).
export default function LegalLayout({
  title,
  subtitle,
  updatedAt,
  eyebrow = 'Dokumen Legal · larisin.ai',
  children,
}) {
  return (
    <>
      <div className="legal-head">
        <div className="wrap legal-wrap">
          <span className="eyebrow">
            <span className="dots">
              <i />
              <i />
            </span>{' '}
            {eyebrow}
          </span>
          <h1>{title}</h1>
          <p className="sub">{subtitle}</p>
          <p className="upd">Terakhir diperbarui: {updatedAt}</p>
        </div>
      </div>

      <div className="legal-body">
        <div className="wrap legal-wrap">{children}</div>
      </div>

      <Footer />
    </>
  )
}

// Numbered article block.
export function Pasal({ number, title, children }) {
  return (
    <section className="pasal">
      <h2>
        <span className="num">{number}</span>
        {title}
      </h2>
      <div className="body">{children}</div>
    </section>
  )
}
