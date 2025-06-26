ServerEvents.recipes((event) => {
  // Spell Books
  event.remove({ id: "ars_nouveau:novice_spell_book" });
  event.remove({ id: "ars_nouveau:apprentice_book_upgrade" });
  event.remove({ id: "ars_nouveau:archmage_book_upgrade" });

  event.shapeless("ars_nouveau:novice_spell_book", [
    "minecraft:book",
    "ars_nouveau:source_gem",
    "ars_nouveau:source_gem",
    "minecraft:diamond_pickaxe",
    "minecraft:blaze_rod",
    "minecraft:blaze_rod",
    "minecraft:iron_shovel",
    "minecraft:iron_axe",
    "minecraft:iron_sword",
  ]);
  event.custom({
    type: "ars_nouveau:book_upgrade",
    category: "misc",
    ingredients: [
      {
        item: "ars_nouveau:novice_spell_book",
      },
      {
        item: "minecraft:netherite_ingot",
      },
      {
        item: "minecraft:totem_of_undying",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:magma_cream",
      },
      {
        item: "ars_nouveau:magebloom_fiber",
      },
      {
        item: "ars_nouveau:source_gem_block",
      },
    ],
    result: {
      count: 1,
      id: "ars_nouveau:apprentice_spell_book",
    },
  });
  event.custom({
    type: "ars_nouveau:book_upgrade",
    category: "misc",
    ingredients: [
      {
        item: "ars_nouveau:apprentice_spell_book",
      },
      {
        item: "allthemodium:allthemodium_ingot",
      },
      {
        item: "minecraft:sculk",
      },
      {
        item: "minecraft:nether_star",
      },
      {
        item: "minecraft:end_crystal",
      },
      {
        item: "ars_nouveau:wilden_tribute",
      },
      {
        item: "minecraft:popped_chorus_fruit",
      },
      {
        item: "minecraft:shulker_shell",
      },
      {
        item: "minecraft:shulker_shell",
      },
    ],
    result: {
      count: 1,
      id: "ars_nouveau:archmage_spell_book",
    },
  });

  // Armor tier upgrades
  event.remove({ id: "ars_nouveau:first_armor_upgrade" });
  event.remove({ id: "ars_nouveau:second_armor_upgrade" });
  event.custom({
    type: "ars_nouveau:armor_upgrade",
    pedestalItems: [
      {
        item: "ars_nouveau:source_gem_block",
      },
      {
        item: "ars_nouveau:source_gem_block",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:ender_pearl",
      },
      {
        item: "minecraft:magma_cream",
      },
      {
        item: "minecraft:magma_cream",
      },
    ],
    sourceCost: 2500,
    tier: 1,
  });
  event.custom({
    type: "ars_nouveau:armor_upgrade",
    pedestalItems: [
      {
        item: "minecraft:shulker_shell",
      },
      {
        item: "minecraft:shulker_shell",
      },
      {
        item: "minecraft:end_crystal",
      },
      {
        item: "minecraft:netherite_ingot",
      },
    ],
    sourceCost: 5000,
    tier: 2,
  });
});
