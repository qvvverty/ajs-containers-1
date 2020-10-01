import Character from '../character';
import Team from '../team';

const team = new Team();
const char1 = new Character('Bob', 'Bowman', 3);
const char2 = new Character('John', 'Swordsman', 5);

test('Expect .add to add character to the team', () => {
  team.add(char1);
  expect(team.members.has(char1)).toBe(true);
});

test('Expect .add to throw an Error if character already a party member', () => {
  expect(() => team.add(char1)).toThrow('Этот персонаж уже есть в команде');
});

test('Expect .addAll to add multiple characters to the team', () => {
  team.members.clear();
  team.addAll(char1, char2);
  expect(team.members.has(char1)).toBe(true);
  expect(team.members.has(char2)).toBe(true);
});

test('Expect .toArray to return array of team members', () => {
  expect(team.toArray()).toEqual([char1, char2]);
});
