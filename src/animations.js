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

export const storiesAnimationWrapper = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

export const storiesAnimationY = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      type: "tween",
      // bounce: 0.25,
      ease: "easeInOut",
    },
  },
};

export const storiesAnimationX = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      type: "tween",
      // bounce: 0.25,
      ease: "easeInOut",
    },
  },
};

export const galleryAnimationWrapper = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const galleryTitleAnimationX = {
  initial: {
    scale: 0.2,
    x: -200,
  },
  animate: {
    scale: 1,
    x: 0,
    transition: {
      duration: 0.55,
      type: "spring",
      bounce: 0.25,
      ease: "easeInOut",
    },
  },
};

export const galleryAnimationX = {
  initial: {
    scale: 0.2,
    opacity: 0,
    x: -2000,
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      type: "spring",
      bounce: 0.25,
      ease: "easeInOut",
    },
  },
};

export const galleryAnimationY = {
  initial: {
    scale: 0.2,
    opacity: 0,
    y: 500,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      type: "spring",
      bounce: 0.25,
      ease: "easeInOut",
    },
  },
};
