ServerEvents.recipes(event => {
  event.remove({ id: "laserio:logic_chip_raw" });
  event.remove({ id: "laserio:overclocker_card" });
  event.remove({ id: "laserio:overclocker_node" });
  event.remove({ id: "laserio:laser_connector" });
  event.remove({ id: "laserio:laser_node" });
  event.remove({ id: "laserio:laser_connector_advanced" });
  event.shaped("laserio:logic_chip_raw", ["CLC","SMS","CLC"], {
    C: "#c:dusts/redstone",
    L: "#c:plates/gold",
    S: "#c:silicon",
    M: "#c:storage_blocks/quartz"
  });
  event.shaped("laserio:overclocker_card", [" P ","SMS","PPP"], {
    P: "#c:plates/gold",
    S: "actuallyadditions:empowered_restonia_crystal",
    M: "laserio:logic_chip"
  });
  event.shaped("laserio:overclocker_node", [" P ","SMS","PPP"], {
    P: "actuallyadditions:empowered_diamatine_crystal",
    S: "actuallyadditions:empowered_restonia_crystal",
    M: "laserio:logic_chip"
  });
  event.shaped("laserio:laser_connector", [" T ","SMS","BBB"], {
    T: "create:polished_rose_quartz",
    S: "#c:dusts/redstone",
    M: "laserio:logic_chip",
    B: "#c:plates/iron",
  });
  event.shaped("laserio:laser_node", ["CSC","SMS","CSC"], {
    C: "#c:plates/iron",
    S: "create:polished_rose_quartz",
    M: "laserio:laser_connector"
  });
  event.shaped("laserio:laser_connector_advanced", ["EDE", "RCR", "GAG"], {
    E: "minecraft:ender_pearl",
    D: "actuallyadditions:empowered_diamatine_crystal",
    R: "actuallyadditions:empowered_restonia_crystal",
    C: "laserio:laser_connector",
    G: "#c:plates/gold",
    A: "#c:ingots/allthemodium"
  });
});
