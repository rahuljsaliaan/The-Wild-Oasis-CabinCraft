import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  // const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
  //   "/",
  //   ""
  // );

  // // https://rcizndcjqludlczfwbrk.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-10-07T11%3A18%3A19.424Z

  // const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images`;

  const { error } = await supabase.from("cabins").insert([newCabin]).select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
