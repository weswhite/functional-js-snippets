arr.reduce((stat, person) => {
  const country = person.address.country;
  stat[country] = (stat[country]) ? 1 : stat[country] + 1;
  return stat;
})
