ServerEvents.recipes(event => {
  event.remove({ id: 'createaddition:liquid_burning/lava' });
  event.remove({ id: 'functionalstorage:dripping_upgrade' });
  event.shaped('functionalstorage:dripping_upgrade', ['ILI', 'FDF', 'ICI'], {
    I: 'silentgear:crimson_iron_ingot',
    L: 'minecraft:lava_bucket',
    F: 'ars_nouveau:fire_essence',
    D: 'minecraft:pointed_dripstone',
    C: 'minecraft:cauldron'
  });
});
