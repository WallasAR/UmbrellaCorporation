import theme from "../../styles/theme";

interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
    width?: number;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
};

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
};

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.RED3,
      width: 280,
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


export const variants = {
  primary: buttonPrimary,
  purchase: buttonPurchase,
};