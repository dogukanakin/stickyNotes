import { useState, useRef } from "react";

export default function StickyNote( { onClose} ) {
    const [allowMove, setAllowNove] = useState(false)
    const stickyNoteRef = useRef() 

    const [dx, setDx] = useState(0)
    const [dy, setDy] = useState(0)

  function handleMouseDown(e) {
    setAllowNove(true)
    const dimensions = stickyNoteRef.current.getBoundingClientRect()
    setDx(e.clientX - dimensions.x)
    setDy(e.clientY - dimensions.y)

  }
  function handleMouseMove(e) {
    if(allowMove){

        console.log("working");
        const x = e.clientX - dx
        const y = e.clientY - dy
        stickyNoteRef.current.style.left = x + 'px'
        stickyNoteRef.current.style.top = y + 'px'

    }
  }
  function handleMouseUp() {
    setAllowNove(false)
  }

  return (
    <div className="sticky-note" ref={stickyNoteRef}>
      <div
        className="sticky-note-header"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div>Sticky Note</div>
        <div className="close" onClick={onClose} >&times;</div>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
}
