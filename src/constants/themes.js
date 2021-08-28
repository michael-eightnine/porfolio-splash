const shared = {
  primaryColor: 'blue',
  secondaryColor: 'white'
};

const THEMES = [
  {
    id: 'blue',
    sphereColor: '#b0ade6',
    logoColor: shared.primaryColor,
    lightingColor: '#898fa5',
    scale: 1.15,
    factor: 1.5,
    ...shared
  },
  {
    id: 'purple',
    sphereColor: '#b992f5',
    lightingColor: 'lightblue',
    logoColor: '#7043dc',
    scale: 1.35,
    factor: 2.5,
    ...shared
  },
  {
    id: 'cyan',
    sphereColor: '#70e6f3',
    lightingColor: '#70f3e1',
    logoColor: '#53cbd2',
    scale: 0.85,
    factor: 1.25,
    ...shared
  },
  {
    id: 'lime',
    sphereColor: '#76dc7a',
    lightingColor: '#35f568',
    logoColor: '#60e07f',
    scale: 1.25,
    factor: 3,
    ...shared
  },
  {
    id: 'yellow',
    sphereColor: '#ffea8c',
    lightingColor: '#ffc061',
    logoColor: '#ffb833',
    scale: 0.9,
    factor: 1.5,
    ...shared
  },
  {
    id: 'pink',
    sphereColor: '#f797d5',
    lightingColor: '#fa50a8',
    logoColor: '#a44dbf',
    scale: 1.4,
    factor: 2.25,
    ...shared
  }
  // {
  //   id:'salmon',
  //   sphereColor: '#f23e29',
  //   lightingColor: '#f74e3b',
  //   logoColor: '#ffc1ba',
  //   scale: 1.4,
  //   factor: 2.25,
  //   ...shared
  // }
];

export default THEMES;
