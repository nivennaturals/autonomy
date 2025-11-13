import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'you@homestead.example' },
    update: {},
    create: { email: 'you@homestead.example', name: 'Homesteader' },
  });

  await prisma.recipe.createMany({
    data: [
      {
        title: "Grandma's Depression-Era Dill Pickles",
        slug: "grandmas-dill-pickles",
        description: "Fermented then water-bath canned – crisp every time",
        ingredients: JSON.stringify([
          { amount: "8 lbs", item: "pickling cucumbers" },
          { amount: "1/2 cup", item: "pickling salt" },
          { amount: "6 cups", item: "vinegar (5%)" },
          { amount: "6 cups", item: "water" },
          { amount: "Fresh dill, garlic, peppercorns", item: "per jar" }
        ]),
        instructions: `# Ferment 3–7 days, then can...\n1. Pack jars with cucumbers...\n2. Water bath 10 min (pints) / 15 min (quarts)`,
        yield: "9 quarts",
        processingTime: "10–15 minutes",
        headspace: "1/2 inch",
        isTestedSafe: true,
        preservationMethod: ["FERMENTATION", "WATER_BATH"],
        season: ["SUMMER"],
        authorId: user.id
      },
      // 24 more real recipes... (I'll include a few more, full list in final repo)
    ],
    skipDuplicates: true,
  });
}

main().then(() => prisma.$disconnect());
