import usersService from "./users.js";

async function signUp(req, res) {
  try {
    if (req.body.credential) {
      const profile = await usersService.signUp(req.body.credential);
      res.status(201).json(profile);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function signIn(req, res) {
  try {
    if (req.body.credential) {
      const profile = await usersService.signIn(req.body.credential);
      res.status(201).json(profile);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}
export default { signUp, signIn };
