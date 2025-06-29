ServerEvents.recipes(event => {
  event.remove({ id: 'chunkloaders:basic_chunk_loader' });
  event.remove({ id: 'chunkloaders:advanced_chunk_loader' });
  event.remove({ id: 'chunkloaders:ultimate_chunk_loader' });

  event.shaped('chunkloaders:basic_chunk_loader', ['CUC', 'SMS', 'CLC'], {
    C: '#c:ingots/steel',
    U: 'create:electron_tube',
    S: 'ars_nouveau:manipulation_essence',
    M: 'minecraft:ender_pearl',
    L: 'create:precision_mechanism'
  });
  event.shaped('chunkloaders:advanced_chunk_loader', ['CUC', 'SMS', 'CLC'], {
    C: '#c:ingots/brass',
    U: 'powah:aerial_pearl',
    S: 'actuallyadditions:void_crystal',
    M: 'chunkloaders:basic_chunk_loader',
    L: 'ars_technica:calibrated_precision_mechanism'
  });
  event.shaped('chunkloaders:ultimate_chunk_loader', ['CUC', 'SMS', 'CLC'], {
    C: 'actuallyadditions:empowered_diamatine_crystal',
    U: 'mekanism:teleportation_core',
    S: 'actuallyadditions:empowered_void_crystal',
    M: 'chunkloaders:advanced_chunk_loader',
    L: 'oritech:processing_unit'
  });
});
