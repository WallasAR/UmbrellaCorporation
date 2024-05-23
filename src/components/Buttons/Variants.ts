import theme from "../../styles/theme";

interface ButtonStyle {
  button: {
    width?: number | string;
    height?: number;
    elevation?: number;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    backgroundColor: string;
  };
  title: {
    color: string;
    fontSize?: number;
    fontFamily?: string;
  };
  icon: {
    color: string;
    size?: number;
  };
};

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
};

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.RED1,
      width: 195,
      height: 65,
      borderRadius: 15
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
  disabled: {
    button: {
      backgroundColor: theme.COLORS.GRAY5,
      width: 280,
      borderRadius: 15
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
};

const buttonToCard: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.RED3,
      width: "95%",
      borderRadius: 15
    },
    title: {
      color: theme.COLORS.WHITE,
      fontSize: 20
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
  disabled: {
    button: {
      backgroundColor: theme.COLORS.GRAY5,
      width: 280,
      borderRadius: 50
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
};

const buttonPurchase: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.GREEN,
      width: 155,
      borderRadius: 50
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
  disabled: {
    button: {
      backgroundColor: theme.COLORS.GRAY5,
      width: 155,
      borderRadius: 50
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
};

const buttonIndicator: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      width: "95%",
      height: 40,
      borderColor: theme.COLORS.RED1,
      borderWidth: 2,
      borderRadius: 15
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.RED1,
      size: 25,
    },
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      width: 0,
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: "transparent",
    },
  },
};

const buttonTransparent: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      width: 150,
      height: 25
    },
    title: {
      color: theme.COLORS.RED3,
      fontSize: 14,
    },
    icon: {
      color: "transparent",
    },
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
    },
    title: {
      color: theme.COLORS.RED3,
    },
    icon: {
      color: "transparent",
    },
  },
};

export const variants = {
  toCard: buttonToCard,
  primary: buttonPrimary,
  purchase: buttonPurchase,
  indicator: buttonIndicator,
  transparent: buttonTransparent,
};