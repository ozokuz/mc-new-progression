ServerEvents.recipes(event => {
  event.remove({ id: "justdirethings:gooblock_tier1" });
  event.remove({ id: "justdirethings:gooblock_tier2" });
  event.remove({ id: "justdirethings:gooblock_tier3" });
  event.remove({ id: "justdirethings:gooblock_tier4" });

  event.shaped("justdirethings:gooblock_tier1", ["CRC", "SMS", "CBC"], {
    C: "minecraft:clay_ball",
    R: "#c:ingots/netherite",
    S: "minecraft:rotten_flesh",
    M: "minecraft:dirt",
    B: "minecraft:sugar",
  });
  event.shaped("justdirethings:gooblock_tier2", ["CRC", "SMS", "CBC"], {
    C: "minecraft:blaze_powder",
    R: "#c:ingots/allthemodium",
    S: "minecraft:nether_wart",
    M: "justdirethings:gooblock_tier1",
    B: "#c:storage_blocks/redstone",
  });
  event.shaped("justdirethings:gooblock_tier3", ["CRC", "SMS", "CBC"], {
    C: "minecraft:ender_pearl",
    R: "#c:ingots/vibranium",
    S: "minecraft:dragon_breath",
    M: "justdirethings:gooblock_tier2",
    B: "#c:end_stones",
  });
  event.shaped("justdirethings:gooblock_tier4", ["CRC", "SMS", "CBC"], {
    C: "minecraft:sculk",
    R: "#c:ingots/unobtainium",
    S: "minecraft:echo_shard",
    M: "justdirethings:gooblock_tier3",
    B: "minecraft:sculk_shrieker",
  });
});
