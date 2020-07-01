import playerJobOptions from "../enums/playerJobOptions";

const getJob = jobValue => {
  const job = playerJobOptions.find( jobOption => jobOption.value === jobValue);
  return job;
};

export default getJob;
