import React, { useState, useEffect } from 'react'
import CanvaLayout from './CanvaLayout'

const CanvasMain = () => {

  /* ------------------ Button Dynamically Updates -----------------------*/
  const [colorSet, setColorSet] = useState(['#4285F4', '#EA4335', '#34A853'])


  /* -------------------- Start of Modal Event --------------------------*/

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* ----------------------- End of Modal Event --------------------------*/


  /* ----------------------- Start of Color Event -----------------------*/


  const [color, setColor] = useState("#FFFFF");


  /* ----------------------- End of Color Event -----------------------*/

  useEffect(() => {

    const randomIndex = Math.floor(Math.random() * 3);
    setColorSet(colorSet[randomIndex]);
    //eslint-disable-next-line
  }, [])


  return (

    <CanvaLayout colorSet={colorSet}
      openModal={openModal}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      color={color}
      setColor={setColor}>
    </CanvaLayout>

  )
}

export default CanvasMain