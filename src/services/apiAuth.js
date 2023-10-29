import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // NOTE: It is a bit more secure to re-fetch the user data from the database even though it is available in the session
  // session data will be automatically passed
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password or the fullName

  let updateData;

  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2. Upload avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { data: avatarData, error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(error.message);
  // 3. Update avatar in the user
  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${avatarData?.path}`;

  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser({
      data: { avatar: imagePath },
    });

  if (updateError) throw new Error(updateError.message);

  return updatedUser;
}
