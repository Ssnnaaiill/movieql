export const people = [
  {
    id: "0",
    name: "Haruka",
    age: 17,
    height: 158
  },
  {
    id: "1",
    name: "Chihaya",
    age: 16,
    height: 162
  },
  {
    id: "2",
    name: "Miki",
    age: 15,
    height: 161
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filteredPeople[0];
};
