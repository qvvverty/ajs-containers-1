export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) throw new Error('Этот персонаж уже есть в команде');
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) this.members.add(character);
  }

  toArray() {
    const teamArray = [];
    for (const character of this.members) teamArray.push(character);
    return teamArray;
  }
}
