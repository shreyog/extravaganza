const EVENT_SECTION_STYLING = `
.event-container {
    overflow: hidden;
    position: relative;
    z-index: 9;
  
    min-height: 100vh;
}

.event-container-bg {
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-container-content {
    position: relative;
    border: 1px solid red;
}

`;

export default EVENT_SECTION_STYLING;
