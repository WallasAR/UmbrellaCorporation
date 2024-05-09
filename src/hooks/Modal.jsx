import React, { useState } from "react";

const useModal = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    toggleModal,
  };
};

export { useModal };