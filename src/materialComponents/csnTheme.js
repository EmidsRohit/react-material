import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#5EA9BF",
  secondary: "#E5E5E5",
  tertiary: "#4A4A4A",
  alert: "#F5A623",
  success: "#01CC01",
  error: "#FF0000",
  white: "#FFFFFF",
  textPrimary: "#383838",
  textLight: "#9b9b9b",
  lightBackGround: "#8080801c"
};

const cytelTheme = createMuiTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    tertiary: { main: colors.tertiary },
    textPrimary: { main: colors.textPrimary }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    colorTextPrimary: colors.textPrimary,
    headline: {
      fontWeight: 700
    },
    subheading: {
      fontWeight: 400
    },
    body1: {
      fontWeight: 200,
      fontSize: 14,
      margin: "10px 0"
    },
    h6: {
      margin: "10px 0",
      fontSize: 16
    }
  },

  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: 40
      }
    },
    MuiInputBase: {
      root: {
        marginRight: "4px"
      }
    },
    MuiDivider: {
      root: {
        margin: "15px 0"
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: 12
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      }
    },
    MuiFormHelperText: {
      contained: {
        margin: "0px!important"
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        background: colors.lightBackGround,
        "&$expanded": {
          minHeight: 30
        }
      },
      content: {
        "&$expanded": {
          margin: 0
        }
      },
      expandIcon: {
        "&$expanded": {
          marginRight: -26
        }
      }
    },
    MuiMenuItem: {
      root: {
        margin: 0,
        lineHeight: 2,
        paddingTop: "2px 0"
      }
    }
  }
});

export default cytelTheme;
