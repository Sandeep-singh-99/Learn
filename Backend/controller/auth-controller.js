const User = require("../models/user-model");

const bcrypt = require("bcryptjs");


const home = async (req, res) => {
  try {
    res.send("Welcome to home page Sandeep ");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    res.json("Welcome to register page")

    if (userExist) {
      return res.json({ msg: "email already exists" });
    }

    //hash the password
    // const saltRound = 10
    // const hash_password = await bcrypt.hash(pasword, saltRound)

    const userCreated = await User.create({ username, email, phone, password });
    res.json({
     // msg: userCreated,
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.json("Internal server error");
  }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        const userExist = await User.findOne({email})

        if (!userExist) {
            return res.json({message: "Invalid Credentials"})
        }

        // const isPasswordValid = await bcrypt.compare(password, userExist.password)

        const isPasswordValid = await userExist.comparepassword(password)

        if(isPasswordValid) {
            res.json({
                // msg: userCreated,
                 msg: "login successful",
                 token: await userExist.generateToken(),
                 userId: userExist._id.toString(),
               });
        } else {
            res.json({message: "Invalid email or password"})
        }

    } catch (error) {
        res.json("Internal server error")
    }
}

module.exports = { home, register, login };
