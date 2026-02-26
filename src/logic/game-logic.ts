export type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
export type GameMode = 'original' | 'bonus';

export interface GameResult {
    winner: 'player' | 'house' | 'draw';
    message: string;
}

const RULES: Record<Choice, Choice[]> = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
};

export const ORIGINAL_CHOICES: Choice[] = ['rock', 'paper', 'scissors'];
export const BONUS_CHOICES: Choice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

export function calculateWinner(player: Choice, house: Choice): GameResult {
    if (player === house) {
        return { winner: 'draw', message: 'IT\'S A DRAW' };
    }

    if (RULES[player].includes(house)) {
        return { winner: 'player', message: 'YOU WIN' };
    }

    return { winner: 'house', message: 'YOU LOSE' };
}

export function getRandomChoice(mode: GameMode = 'bonus'): Choice {
    const choices = mode === 'original' ? ORIGINAL_CHOICES : BONUS_CHOICES;
    return choices[Math.floor(Math.random() * choices.length)];
}

