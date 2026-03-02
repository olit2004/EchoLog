import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  // hash password
  const plainPassword = "password123";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = await prisma.user.create({
    data: {
      email: "jane.doe@example.com",
      name: "Jane Doe",
      password: hashedPassword,
      image: "https://example.com/avatar.jpg",
      entries: {
        create: [
          {
            movieTitle: "Inception",
            director: "Christopher Nolan",
            posterUrl: "https://example.com/inception.jpg",
            releaseYear: 2010,
            rating: 4.8,
            mood: "Inspired",
            reflection:
              "The concept of dreams within dreams was mind-bending.",
            themes: ["Dreams", "Reality", "Mind"],
            notableScene: "The hallway fight scene",
          },
          {
            movieTitle: "Parasite",
            director: "Bong Joon-ho",
            posterUrl: "https://example.com/parasite.jpg",
            releaseYear: 2019,
            rating: 5.0,
            mood: "Thoughtful",
            reflection:
              "A brilliant social commentary with shocking twists.",
            themes: ["Class", "Society", "Family"],
            notableScene: "The flooding of the semi-basement",
          },
        ],
      },
    },
  });

  console.log("✅ Seeded user with hashed password:", {
    id: user.id,
    email: user.email,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });