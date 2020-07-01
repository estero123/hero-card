const playerJobOptions = [
  {
    label: 'Squire',
    value: 'SQUIRE',
    multipliers: {
      hp: 100,
      mp: 75,
      pa: 90,
      ma: 80,
      sp: 100,
    },
    move: 4,
    jump: 3,
    cev: 5,
    c: {
      hp: 11,
      mp: 15,
      pa: 60,
      ma: 50,
      sp: 100
    }
  },
  {
    label: 'Chemist',
    value: 'CHEMIST',
    multipliers: {
      hp: 80,
      mp: 75,
      pa: 75,
      ma: 80,
      sp: 100,
    },
    move: 3,
    jump: 3,
    cev: 5,
    c: {
      hp: 12,
      mp: 16,
      pa: 75,
      ma: 50,
      sp: 100
    }
  }
];

export default playerJobOptions
