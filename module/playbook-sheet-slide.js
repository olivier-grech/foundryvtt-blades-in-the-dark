import { BladesActorSheet } from "./blades-actor-sheet.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {BladesActorSheet}
 */
export class PlaybookSheetSlide extends BladesActorSheet {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
  	  classes: ["blades-in-the-dark", "sheet", "actor"],
  	  template: "systems/blades-in-the-dark/templates/playbook-sheet-slide.html",
      width: 700,
      height: 970,
      tabs: [{navSelector: ".tabs", contentSelector: ".tab-content", initial: "abilities"}]
    });
  }
}
