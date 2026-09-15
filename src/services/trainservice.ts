import { supabase } from "./supabase";

export async function getTrains() {
  const { data, error } = await supabase
    .from("trains")
    .select("*")
    .order("train_number");

  if (error) {
    console.error("Error loading trains:", error);
    throw error;
  }

  return data;
}