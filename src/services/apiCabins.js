import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  // NOTE: optional chaining is also applicable for methods
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  let imagePath = newCabin?.image;

  if (!hasImagePath) {
    const imageName = `${Math.random()}-${newCabin?.image?.name}`.replaceAll(
      "/",
      ""
    );

    const { data, error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (storageError) {
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and cabin could not be created"
      );
    }

    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${data?.path}`;
  }

  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
