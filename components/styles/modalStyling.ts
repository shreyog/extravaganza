const MODAL_STYLING = `

.backdrop {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  background: var(--modal-backdrop);

}

.modal {
  position: absolute;
  z-index: 101;

  width: clamp(50%, 700px, 90%);
  // height: min(50%, 300px);
  border-radius: 1rem;

  background-color: var(--color-gray-darkest);


}

`;
export default MODAL_STYLING;
