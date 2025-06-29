ServerEvents.recipes((event) => {
    event.remove({output: "mininggadgets:upgrade_void_junk"});
    event.remove({output: "mininggadgets:upgrade_fortune_1"});
    event.remove({output: "mininggadgets:upgrade_fortune_2"});
    event.remove({output: "mininggadgets:upgrade_fortune_3"});
});