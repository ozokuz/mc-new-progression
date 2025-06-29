ServerEvents.recipes(event => {
  event.remove({ id: "hostilenetworks:prediction_matrix" });
  event.remove({ id: "hostilenetworks:sim_chamber" });
  event.remove({ id: "hostilenetworks:loot_fabricator" });
  event.remove({ id: "hostilenetworks:deep_learner" });
  event.remove({ id: "hostilenetworks:framework" });

  event.shaped(Item.of("hostilenetworks:prediction_matrix", 16), ["IP ", "PSP", " PG"], {
    I: "#c:plates/iron",
    P: "#c:glass_panes",
    S: "#c:silicon",
    G: "#c:plates/gold"
  });
  event.shaped("hostilenetworks:sim_chamber", [" V ", "ECE", "PTP"], {
    V: "actuallyadditions:void_crystal",
    E: "minecraft:ender_pearl",
    C: "mekanism:steel_casing",
    P: "actuallyadditions:palis_crystal",
    T: "create:electron_tube"
  });
  event.shaped("hostilenetworks:loot_fabricator", [" N ", "DCD", "ETE"], {
    N: "#c:ingots/netherite",
    D: "actuallyadditions:diamatine_crystal",
    C: "mekanism:steel_casing",
    E: "powah:steel_energized",
    T: "create:electron_tube"
  });
  event.shaped("hostilenetworks:deep_learner", ["SES", "RGR", "SDS"], {
    S: "#c:ingots/steel",
    E: "create:electron_tube",
    R: "minecraft:repeater",
    G: "#c:glass_panes",
    D: "#c:dusts/redstone"
  });
  event.shaped("hostilenetworks:blank_data_model", ["ICI", "DRD", "IGI"], {
    I: "#c:plates/iron",
    C: "actuallyadditions:diamatine_crystal",
    D: "#c:dusts/redstone",
    R: "minecraft:repeater",
    G: "#c:plates/gold"
  });
});
