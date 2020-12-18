import { BladesCrewSheet } from "./blades-crew-sheet.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {BladesCrewSheet}
 */
export class CrewSheetCult extends BladesCrewSheet {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
  	  classes: ["blades-in-the-dark", "sheet", "actor"],
  	  template: "systems/blades-in-the-dark/templates/crew-sheet-cult.html",
      width: 700,
      height: 970,
      tabs: [{navSelector: ".tabs", contentSelector: ".tab-content", initial: "abilities"}]
    });
  }
}