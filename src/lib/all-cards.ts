export interface AllCard {
  _id: string;
  category: string;
  subCategory: string;
  title: string;
  image: string;
  moq: number;
  views: number;
  price: number;
}

export async function fetchAllCards(): Promise<AllCard[]> {
  try {
    const response = await fetch("/data/allCardsData.json");

    if (!response.ok) {
      throw new Error("Failed to fetch all cards");
    }

    const data: AllCard[] = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch all cards:", error);

    return [];
  }
}