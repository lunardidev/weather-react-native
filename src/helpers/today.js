function today() {
  const dateobj = new Date();

  let month = dateobj.getMonth() + 1;
  month = `0${month.toString().slice(-2)}`;

  const day = dateobj.getDate().toString();
  const year = dateobj.getFullYear().toString();

  return { month, day, year };
}

export default today;
