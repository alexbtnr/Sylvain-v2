export const formInputHover = {
  hover: {
    background: "#222",
    transition: {
      duration: 0.5,
    },
  },
  initial: {
    background: "#000",
    transition: {
      duration: 0.5,
    },
  },
};

export const formButtonHover = {
  hover: {
    background: "#fff",
    color: "#222",
    transition: {
      duration: 0.5,
    },
  },
  initial: {
    background: "#444",
    color: "#fff",
  },
};

export const cardsAnimationHover = {
  initial: {
    opacity: 0.4,
  },
  animate: {
    opacity: 1,
    transition: {
      // staggerChildren: 2,
    },
  },
};

export const cardsIconAnimation = {
  initial: {
    y: 20,
  },
  animate: {
    y: -20,
  },
};

export const cardsTitleAnimation = {
  initial: {
    y: -20,
  },
  animate: {
    y: 20,
  },
};

export const cardsParagraphAnimation = {
  initial: {
    // display: "none",
    visibility: "hidden",
    opacity: 0,
  },
  animate: {
    // display: "block",
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.8,
    },
  },
};
