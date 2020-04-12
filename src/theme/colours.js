export const namedColors = {
      ALPINE: {
            light: '#99BEFF',
            accent: '#406EEB',
            main: '#1E4CC1',
            dark: '#0B39A0',
      },
      CORAL: {
            light: '#FFB3DD',
            accent: '#DD2070',
            main: '#AD1151',
            dark: '#840438',
      },
      SPROUT: {
            background: '#BFFFD4',
            light: '#9CFCBC',
            accent: '#3DCA6C',
            main: '#179942',
            dark: '#066B27',
      },
      HARVEST: {
            background: '#FBF6F4',
            backgroundAccent: '#FDF4F1',
            light: '#FFCF99',
            accent: '#D78426',
            main: '#AD6411',
            dark: '#904F04',
            shadow: '0px 4px 7px rgba(226, 222, 226, 0.4)',
      },
      LIGHTS: {
            eggShell: '#FAFAFA',
            shade: '#CCCCDD',
            pavement: '#88889F',
            cobalt: '#2F3B52',
            coal: '#40405A',
            main: '#CCCCDD',
      },
      DARKS: {
            fauxBlack: '#17171E',
            obsidian: '#242430',
            dusk: '#45455B',
            cobalt: '#2F3B52',
            pavement: '#88889F',
            eggWhites: '#EAEAEA',
            main: '#45455B',
      },
};

export const arrayTheme = Object.entries(namedColors).map(([colorGroup, colorObject], index) => {
      return {
            title: colorGroup,
            mainColour: colorObject.main,
            colorObject,
      }
});