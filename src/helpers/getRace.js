const getRace = raceValue => {
  const race = playerRaceOptions.find( raceOption => raceOption.value === raceValue);
  return race;
};

export default getRace;
