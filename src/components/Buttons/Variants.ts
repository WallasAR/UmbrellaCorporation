import theme from "../../styles/theme";

interface ButtonStyle {
  button: {
    width?: number;
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
}

const buttonToCard: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.RED3,
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
}

const buttonPurchase: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.GREEN,
      width: 135,
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
      width: 135,
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
}
const buttonIndicatorIcon: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.WHITE,
      width: 40,
      height: 40,
      elevation: 5,
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
}
const buttonSocialGoogle: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.WHITE,
      width: 140,
      height: 70,
      borderRadius: 15,
      
    },
    title: {
      color: theme.COLORS.GRAY4,
      fontFamily: theme.FONTS.QUICKSANDMEDIUM,
    },
    icon: {
      color: theme.COLORS.GRAY7,
      size: 28,
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
}

const buttonSocialfacebook: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.BLUE,
      width: 155,
      height: 70,
      borderRadius: 15,
      
    },
    title: {
      color: theme.COLORS.WHITE,
      fontFamily: theme.FONTS.QUICKSANDMEDIUM,
      fontSize: 18
    },
    icon: {
      color: theme.COLORS.WHITE,
      size: 28,
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
}
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
}  
export const variants = {
  toCard: buttonToCard,
  primary: buttonPrimary,
  purchase: buttonPurchase,
  indicator: buttonIndicatorIcon,
  transparent: buttonTransparent,
  googleSocial: buttonSocialGoogle,
  facebookSocial: buttonSocialfacebook,
};