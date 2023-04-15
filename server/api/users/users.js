import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import db from "../../db/db.js";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

/**
 *  This function is used verify a google account
 */
async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    return { error: "Invalid user detected. Please try again" };
  }
}

async function signUp(token) {
  const verificationResponse = await verifyGoogleToken(token);
  if (verificationResponse.error) {
    throw new Error(verificationResponse.error);
  }
  const profile = verificationResponse.payload;

  const users = await db.users.getUsers({ email: profile?.email });
  if (users.length === 0) {
    db.users.addUser({
      first_name: profile?.given_name,
      last_name: profile?.family_name,
      email: profile?.email,
    });
  } else {
    throw new Error("An account has already been created using this email.");
  }

  return {
    message: "Signup was successful",
    user: {
      firstName: profile?.given_name,
      lastName: profile?.family_name,
      picture: profile?.picture,
      email: profile?.email,
      token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      }),
    },
  };
}

async function signIn(token) {
  const verificationResponse = await verifyGoogleToken(token);
  if (verificationResponse.error) {
    throw new Error(verificationResponse.error);
  }
  const profile = verificationResponse.payload;

  const users = await db.users.getUsers({ email: profile?.email });
  if (users.length === 0) {
    throw new Error(
      "Cannot find account associated with email. Please sign up."
    );
  }

  return {
    message: "Login was successful",
    user: {
      firstName: profile?.given_name,
      lastName: profile?.family_name,
      picture: profile?.picture,
      email: profile?.email,
      token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      }),
    },
  };
}

export default { signUp, signIn };
