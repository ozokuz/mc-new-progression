ServerEvents.recipes(event => {
  event.remove({ id: "powah:crafting/dielectric_casing" });
  event.remove({ id: "powah:crafting/energizing_orb" });
  event.shaped("powah:dielectric_casing", ["IHI", "VSV", "IHI"], {
    I: "#c:ingots/iron",
    H: "powah:dielectric_rod_horizontal",
    V: "powah:dielectric_rod",
    S: "create:sturdy_sheet"
  });
  event.shaped("powah:energizing_orb", ["PPP","PCP","RRR"], {
    P: "create:polished_rose_quartz",
    C: "powah:dielectric_casing",
    R: "powah:dielectric_rod_horizontal"
  });
});
