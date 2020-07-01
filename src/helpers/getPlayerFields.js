const getPlayerFields = (payload, player) => {
  const resultObj = {};
  const fields = payload.field.split('.');
  resultObj[fields[0]]= {
    ...resultObj[fields[0]],
    [resultObj[fields[0]][fields[1]]]: {

    }
  }

}

export default getPlayerFields;
