import { CsvFileReader } from './CsvFileReader';

//object, but here it is not clear the purpose (why is the following info important)

const reader = new CsvFileReader('football.csv');
reader.read();
// const MatchResult = {
//   homeWin: 'H',
//   awayWin: 'A',
//   draw: 'D',
// };

//enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
