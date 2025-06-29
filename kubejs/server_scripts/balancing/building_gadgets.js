ServerEvents.recipes(event => {
  event.remove({ id: "buildinggadgets2:gadget_building" });
  event.remove({ id: "buildinggadgets2:gadget_exchanging" });
  event.remove({ id: "buildinggadgets2:gadget_copy_paste" });
  event.remove({ id: "buildinggadgets2:gadget_cut_paste" });
  event.remove({ id: "buildinggadgets2:gadget_destruction" });

  event.shaped("buildinggadgets2:gadget_building", ["SRS", "TCT", "SPS"], {
    S: "#c:plates/iron",
    R: "actuallyadditions:restonia_crystal",
    T: "actuallyadditions:empowered_diamatine_crystal",
    C: "powah:aerial_pearl",
    P: "actuallyadditions:palis_crystal"
  });
  event.shaped("buildinggadgets2:gadget_exchanging", ["SRS", "TCT", "SPS"], {
    S: "#c:plates/iron",
    R: "actuallyadditions:restonia_crystal",
    T: "actuallyadditions:empowered_emeradic_crystal",
    C: "powah:aerial_pearl",
    P: "actuallyadditions:palis_crystal"
  });
  event.shaped("buildinggadgets2:gadget_copy_paste", ["SRS", "TCT", "SPS"], {
    S: "#c:plates/iron",
    R: "actuallyadditions:restonia_crystal",
    T: "actuallyadditions:empowered_palis_crystal",
    C: "powah:aerial_pearl",
    P: "actuallyadditions:palis_crystal"
  });
  event.shaped("buildinggadgets2:gadget_cut_paste", ["SRS", "TCT", "SPS"], {
    S: "#c:plates/iron",
    R: "actuallyadditions:restonia_crystal",
    T: "actuallyadditions:empowered_restonia_crystal",
    C: "powah:aerial_pearl",
    P: "actuallyadditions:palis_crystal"
  });
  event.shaped("buildinggadgets2:gadget_destruction", ["SRS", "TCT", "SPS"], {
    S: "#c:plates/iron",
    R: "actuallyadditions:restonia_crystal",
    T: "actuallyadditions:empowered_void_crystal",
    C: "powah:aerial_pearl",
    P: "actuallyadditions:palis_crystal"
  });
});
