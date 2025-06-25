const shouldntSpoil = [
  "minecraft:ominous_bottle",
  "minecraft:spider_eye",
  "farmersdelight:beef_stew",
  "farmersdelight:fish_stew",
  "farmersdelight:vegetable_soup",
  "farmersdelight:chicken_soup",
  "farmersdelight:noodle_soup",
  "farmersdelight:baked_cod_stew",
  "farmersdelight:pumpkin_soup",
  "twilightforest:hydra_chop",
  "brewinandchewin:fiery_fondue",
  "brewinandchewin:scarlet_pierogi",
  "brewinandchewin:horror_lasagna",
  "brewinandchewin:cheesy_pasta",
  "brewinandchewin:creamy_onion_soup",
  "brewinandchewin:vegetable_omelet",
  "brewinandchewin:flaxen_cheese_wedge",
  "brewinandchewin:scarlet_cheese_wedge",
  "brewinandchewin:kippers",
  "brewinandchewin:kimchi",
  "brewinandchewin:jerky",
  "brewinandchewin:pickled_pickles",
  "brewinandchewin:cocoa_fudge",
  "minecraft:chorus_fruit",
  "minecraft:poisonous_potato",
  "minecraft:dried_kelp",
  "ars_nouveau:source_berry_pie",
];

const shouldSpoil = [
  "enderscape:murublight_shelf",
  "berry_good:sweet_berry_mince",
  "berry_good:sweet_berry_meatballs",
  "enderzoology:enderios",
  "silentgear:nether_banana",
  "silentgear:golden_nether_banana",
  "netherex:cooked_ribs",
  "netherex:ribs",
  "netherex:shroomfruit",
  "netherex:twisted_shroomfruit",
  "iceandfire:fire_dragon_flesh",
  "iceandfire:ice_dragon_flesh",
  "iceandfire:lightning_dragon_flesh",
  "iceandfire:ambrosia",
  "twilightforest:maze_wafer",
  "cataclysm:lionfish",
  "cataclysm:amethyst_crab_meat",
  "cataclysm:blessed_amethyst_crab_meat",
  "biomeswevegone:oddion_bulb",
  "biomeswevegone:blooming_oddion",
  "biomeswevegone:white_puffball_cap",
  "regions_unexplored:duskmelon_slice",
  "regions_unexplored:meadow_sage",
  "regions_unexplored:salmonberry",
  "regions_unexplored:hanging_earlight_fruit",
  "extended_industrialization:crystallized_honey",
  "forbidden_arcanus:bat_wing",
  "farmersdelight:pie_crust",
  "farmersdelight:smoked_ham",
  "farmersdelight:ham",
  "farmersdelight:pumpkin_slice",
  "farmersdelight:tomato_sauce",
  "farmersdelight:cooked_rice",
  "productivebees:sugarbag_honeycomb",
  "forbidden_arcanus:cooked_tentacle",
  "forbidden_arcanus:tentacle",
];

ServerEvents.tags("item", (event) => {
  shouldntSpoil.forEach((item) => {
    event.add("spoiled:foods_blacklist", item);
  });

  shouldSpoil.forEach((item) => {
    event.add("spoiled:foods", item);
  });
});

ServerEvents.recipes((event) => {
  event.custom({
    type: "spoiled:spoil_recipe",
    ingredient: {
      item: "relics:infinity_ham",
    },
    spoiltime: 1,
    priority: 100,
    result: {
      id: "minecraft:rotten_flesh",
    },
  });
});
