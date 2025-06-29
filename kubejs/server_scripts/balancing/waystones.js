ServerEvents.recipes((event) => {
  event.remove({ mod: "waystones" });
  event.shaped("waystones:waystone", ["DSD", "BOB", "AAA"], {
    D: "waystones:warp_dust",
    S: "ars_nouveau:stable_warp_scroll",
    B: "ars_nouveau:source_gem_block",
    O: "minecraft:crying_obsidian",
    A: "minecraft:polished_andesite",
  });
  event.shaped(Item.of("waystones:warp_dust", 2), ["GEG", "ESE", "GEG"], {
    G: "apotheosis:gem_dust",
    E: "#c:dusts/ender_pearl",
    S: Ingredient.of("allthemodium:vibranium_dust").or("iceandfire:pixie_dust"),
  });
  /* event.shaped(Item.of("waystones:warp_dust", 2), ["GEG", "ESE", "GEG"], {
    G: "apotheosis:gem_dust",
    E: "c:dusts/ender_pearl",
    S: "iceandfire:pixie_dust",
  }); */
});
