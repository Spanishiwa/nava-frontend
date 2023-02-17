const MOCK_HOUSEHOLD = [
  {
    name: "Bud Baxter",
    description: "Household contact",
    favoriteFruit: "Apple"
  },
  {
    name: "Andy Baxter",
    description: "Household contact",
    favoriteFruit: "Apple"
  }
];

const MOCK_NEW_MEMBERS = [
  {
    name: "Frank Baxter",
    description: "Household contact",
    favoriteFruit: "Grapes"
  },
  {
    name: "Sarah Baxter",
    description: "Household contact",
    favoriteFruit: "Peach"
  },
  {
    name: "Chris Baxter",
    description: "Household contact",
    favoriteFruit: "Orange"
  },
  {
    name: "Laura Baxter",
    description: "Household contact",
    favoriteFruit: "Green Apple"
  },
  {
    name: "Jack Baxter",
    description: "Household contact",
    favoriteFruit: "Banana"
  }
];

const getNewMember = () => {
  return MOCK_NEW_MEMBERS[Math.floor(Math.random() * MOCK_NEW_MEMBERS.length)];
};

export { getNewMember, MOCK_HOUSEHOLD };
