const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("LOGGED YOU IN! SUCCESSFUL MATCH!");
  } else {
    console.log("INCORRECT!");
  }
};

// hashPassword("monkey");

login("monkey", "$2b$12$VpqE3wMUeFKHN9GtQpouHe0ND./YX1KtrF8nccmkq5m9GgIsPPR8C");





