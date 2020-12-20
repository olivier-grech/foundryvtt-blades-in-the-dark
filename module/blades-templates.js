/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/blades-in-the-dark/templates/actor-parts/playbook-abilities-lurk.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-abilities-slide.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-abilities-whisper.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-coin.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-generic.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-items-lurk.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-items-slide.html",
    "systems/blades-in-the-dark/templates/actor-parts/playbook-items-whisper.html",
    "systems/blades-in-the-dark/templates/actor-parts/attributes.html",
    "systems/blades-in-the-dark/templates/actor-parts/items.html",
    "systems/blades-in-the-dark/templates/actor-parts/stress.html",
    "systems/blades-in-the-dark/templates/crew-parts/crew-generic.html",
    "systems/blades-in-the-dark/templates/parts/turf-list.html",
    "systems/blades-in-the-dark/templates/parts/cohort-block.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
