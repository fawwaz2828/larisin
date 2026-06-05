// Placeholder for a drag-and-drop image slot in the source mockup.
// Renders a styled box with centered hint text; swap for a real <img> later.
export default function ImageSlot({ className = '', style, placeholder }) {
  return (
    <div className={`image-slot ${className}`.trim()} style={style}>
      <span>{placeholder}</span>
    </div>
  )
}
