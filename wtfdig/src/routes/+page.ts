import type { Url } from "url";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
    return {
        strats: [raidplanStrat, codcarStrat, healerOutStrat],
    }
}

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged'; 
export type StartingArea = 'Tiles' | 'Platform';
export type Alignment = 'original' | 'truenorth' | 'addrelative';
export type Alliance = 'A' | 'B' | 'C';

export interface MechanicStrat {
    mechanic: string;
    description: string;
    imageUrl?: string;
    imageRotated?: string;
    mask?: string;
    transform?: string;
    alignmentTransforms?: Record<Alignment, string>;
    alignmentImages?: Record<Alignment, string>;
    alignmentMasks?: Record<Alignment, string>;
}

export interface PlayerStrats {
    alliance: Alliance;
    role: Role;
    party: number;
    notes: string;
    startingArea: StartingArea;
    strats: MechanicStrat[];
    swapNote?: string;
    swapWarning?: string;
    swapStrats?: MechanicStrat[];
}

interface Strat {
    stratName: string;
    stratUrl: string;
    description: string;
    notes: string;
    strats: PlayerStrats[];
}

const raidplanStrat: Strat = {
    stratName: 'raidplan',
    stratUrl: 'https://raidplan.io/plan/o1ZfvSL3dCiqjwfJ',
    description: 'Taken from Raidplan by Aurelia Netcash',
    notes: '',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: 'Left/West platform, Face boss North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nNorth\nw/ Melee 1',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 57.8% 19.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside North',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 78% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside North',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 24% 26%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW inner tile',
                    imageUrl: './strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW inner tile',
                    imageUrl: './strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nNorth\nw/ Melee 1 from A',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 36% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nSouth\nw/ Melee 2',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 58% 82%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside South',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 79% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW West cubby',
                    imageUrl: './strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 21% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW West cubby',
                    imageUrl: './strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 19% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nSouth\nw/ Melee 2 from A',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 37% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nNorth\nw/ Tank',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 18.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'NNW',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 38.8% 24.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 60% 33%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside North',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 38% 36%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside North',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 24%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nSouth\nw/ Healer',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'SSW',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 37% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 60% 61%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside South',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 39% 61%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside South',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nWest\nw/ Ranged',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'WNW',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 30% 43%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 17% 35%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside South',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 33% 83%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside South',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 22% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: 'Left/West platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nWest\nw/ Ranged',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'WSW',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 31% 63%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South',
                    imageUrl: './strats/raidplan/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 20% 55%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside North',
                    imageUrl: './strats/raidplan/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34% 15%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: './strats/raidplan/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 67% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW inner tile',
                    imageUrl: './strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 79% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW inner tile',
                    imageUrl: './strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nNorth\nw/ Melee 1 from A',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 36% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE inner tile',
                    imageUrl: './strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 54%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE inner tile',
                    imageUrl: './strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 18% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nNorth\nw/ Melee 1 from C',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 57.8% 19.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW West cubby',
                    imageUrl: './strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 21% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW West cubby',
                    imageUrl: './strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 20% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nSouth\nw/ Melee 2 from A',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 37% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE East cubby',
                    imageUrl: './strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 81% 54%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE East cubby',
                    imageUrl: './strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nSouth\nw/ Melee 2 from C',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 58% 82%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        }, 
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW North cubby',
                    imageUrl: './strats/raidplan/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 51% 24%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW between Tank and Healer',
                    imageUrl: './strats/raidplan/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 51% 50%, black 26%, rgba(0, 0, 0, 0.4) 26%)'
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapWarning: "You will need to take the R1 spot",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nEast\nw/ Ranged from A',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'ENE',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 64% 40%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE North cubby',
                    imageUrl: './strats/raidplan/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 51% 26%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE between Tank and Healer',
                    imageUrl: './strats/raidplan/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 50% 52%, black 26%, rgba(0, 0, 0, 0.4) 26%)'
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapWarning: "You will need to take the R1 spot",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nWest\nw/ Ranged from C',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'WNW',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 30% 43%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW South cubby',
                    imageUrl: './strats/raidplan/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 50% 81%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW between Tank and Healer',
                    imageUrl: './strats/raidplan/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 50% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapWarning: "You will need to take the R1 spot",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nEast\nw/ Ranged from A',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'ENE',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 64% 40%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE South cubby',
                    imageUrl: './strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 50% 81%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE between Tank and Healer',
                    imageUrl: './strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 50% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapWarning: "You will need to take the R1 spot",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nWest\nw/ Ranged from C',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 41% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'WNW',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 30% 43%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: 'Right/East platform, Face boss North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nNorth\nw/ Melee 1',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 34.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 36% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside North',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside North',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 78% 32%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE inner tile',
                    imageUrl: './strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE inner tile',
                    imageUrl: './strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 19% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nNorth\nw/ Melee 1 from C',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 57.8% 31.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 57.8% 19.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 55.4% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 67% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nSouth\nw/ Melee 2',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 69%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 37% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside South',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 19% 57%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 78% 55%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE East cubby',
                    imageUrl: './strats/raidplan/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 78% 53%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE East cubby',
                    imageUrl: './strats/raidplan/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nSouth\nw/ Melee 2 from C',
                    imageUrl: './strats/raidplan/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 56% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/raidplan/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 58% 82%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 54.3% 33.8%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 35% 78.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        }, 
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nNorth\nw/ Tank',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 47% 22.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'NNE',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 53% 21%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 47% 41%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside North',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 57% 34%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside North',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 28%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nSouth\nw/ Healer',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 46% 81%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'SSE',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 58% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 50% 64%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside South',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 60% 59%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside South',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 79%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nEast\nw/ Ranged',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 60% 53%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'spread',
                    description: 'ENE',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 64% 40%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/East',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 44.8% 19.6%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 65% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 88% 44%, black 9%, rgba(0, 0, 0, 0.4) 9%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside South',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 65% 85%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside South',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 77% 79%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform, Boss faces North',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nEast\nw/ Ranged',
                    imageUrl: './strats/raidplan/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 70% 53%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'ESE',
                    imageUrl: './strats/raidplan/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 65% 59%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/West',
                    imageUrl: './strats/raidplan/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 43.7% 36.2%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 33% 79.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South',
                    imageUrl: './strats/raidplan/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 86% 56%, black 9%, rgba(0, 0, 0, 0.4) 9%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside North',
                    imageUrl: './strats/raidplan/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 69% 15%, black 7%, rgba(0, 0, 0, 0.4) 7%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: './strats/raidplan/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 36% 52%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
    ]
}

const codcarStrat: Strat = {
    stratName: 'codcar',
    stratUrl: 'https://docs.google.com/presentation/d/1SM88CrlJC1cF1gSbNRjn1v26QmDbmKV2yyGJZaGLRnE/preview?slide=id.g321eb6ebf82_10_0',
    description: 'Taken from CODCAR by RADAR',
    notes: 'All platform add-related mechanics are Wall/Add Relative',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: 'Left/West platform, Face boss Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: "Inner\nRelative North\nw/ Healer from A",
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 49.8% 41.6%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative North',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 44% 60%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(90deg)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 66% 59%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 41% 67%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 28% 50%, black 19%, rgba(0, 0, 0, 0.4) 19%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: 'Right/East platform, Face boss Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ Healer from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 49.8% 41.6%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative North',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 44% 60%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 35% 60%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 60% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Outside Middle',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 72% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 50% 25%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northeast',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 75% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 15% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 37% 14%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Outside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 27% 24%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 50% 25%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northeast',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 75% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 81% 39%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 40% 19%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Outside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 72% 72%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        }, 
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southwest\nw/ Ranged from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 40% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northwest',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 52% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 73% 41%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 59% 73%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Outside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 27% 76%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southwest\nw/ Ranged from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 40% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northwest',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 24%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 66% 36%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 52% 38%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32% 41%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 40% 68%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Outside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 73% 26%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside, R1 is generally Caster in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative Southwest\nw/ Melee from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 31% 74%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative West',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 65%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 21% 38%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 62% 21%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Inside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 77%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside, R2 is generally Phys Ranged in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative Southwest\nw/ Melee from A',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 31% 74%, black 13%, rgba(0, 0, 0, 0.4) 13%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative West',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 22% 65%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    transform: 'rotate(90deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 87% 63%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 64% 13%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Inside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 22%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW inner tile',
                    imageUrl: './strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NW East inner tile',
                    imageUrl: './strats/codcar/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 71% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW East inner tile',
                    imageUrl: './strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ Healer from B',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative North',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW inner tile',
                    imageUrl: './strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 82% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SW East inner tile',
                    imageUrl: './strats/codcar/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 76% 38%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW East inner tile',
                    imageUrl: './strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ Healer from B',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative North',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW West cubby',
                    imageUrl: './strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NW central tile',
                    imageUrl: './strats/codcar/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 56% 39%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW South inner tile',
                    imageUrl: './strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 48% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from B',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northeast',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW West cubby',
                    imageUrl: './strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SW central tile',
                    imageUrl: './strats/codcar/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 59% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW North inner tile',
                    imageUrl: './strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from B',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northeast',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        }, 
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NW North cubby',
                    imageUrl: './strats/codcar/tiles-northwest-idle.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NW North cubby',
                    imageUrl: './strats/codcar/tiles-northwest-wc.png',
                    mask: 'radial-gradient(circle at 45% 27%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NW central tile',
                    imageUrl: './strats/codcar/tiles-northwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southwest\nw/ Ranged from A',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northwest',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SW South cubby',
                    imageUrl: './strats/codcar/tiles-southwest-idle.png',
                    mask: 'radial-gradient(circle at 49% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SW South cubby',
                    imageUrl: './strats/codcar/tiles-southwest-wc.png',
                    mask: 'radial-gradient(circle at 49% 67%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SW central tile',
                    imageUrl: './strats/codcar/tiles-southwest-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southwest\nw/ Ranged from A',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northwest',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces Outside, R1 is generally Caster in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southeast\nw/ Ranged from B',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative South',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 72% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 30% 14%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 86% 30%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 68% 50%, black 18%, rgba(0, 0, 0, 0.4) 18%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: 'Left/West platform, Boss faces Outside, R2 is generally Phys Ranged in the diagrams',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative Southeast\nw/ Ranged from B',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 71% 74%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative East',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(270deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 75% 37%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside\nRelative Left\nTrue South',
                    imageUrl: './strats/codcar/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32% 84%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-west-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 16% 32%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Inside\nRelative Right\nTrue North',
                    imageUrl: './strats/codcar/platform-west-swap.png',
                    mask: 'radial-gradient(circle at 69% 22%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(90deg)',
                    }
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE inner tile',
                    imageUrl: './strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 21% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NE West inner tile',
                    imageUrl: './strats/codcar/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 31% 52%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE West inner tile',
                    imageUrl: './strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 17% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ Healer from C',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative North',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE inner tile',
                    imageUrl: './strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 20% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SE West inner tile',
                    imageUrl: './strats/codcar/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 26% 39%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE West inner tile',
                    imageUrl: './strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 18% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative North\nw/ Healer from C',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 39%, black 14%, rgba(0, 0, 0, 0.4) 14%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative North',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE East cubby',
                    imageUrl: './strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 83% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NE central tile',
                    imageUrl: './strats/codcar/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 45% 41%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE South inner tile',
                    imageUrl: './strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 48% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from C',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northeast',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE East cubby',
                    imageUrl: './strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SE central tile',
                    imageUrl: './strats/codcar/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 44% 51%, black 18%, rgba(0, 0, 0, 0.4) 18%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE North inner tile',
                    imageUrl: './strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative North\nw/ Tank from C',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 49% 20%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northeast',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 74% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        }, 
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'NE North cubby',
                    imageUrl: './strats/codcar/tiles-northeast-idle.png',
                    mask: 'radial-gradient(circle at 49% 19%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'NE North cubby',
                    imageUrl: './strats/codcar/tiles-northeast-wc.png',
                    mask: 'radial-gradient(circle at 56% 27%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'swap',
                    description: 'NE central tile',
                    imageUrl: './strats/codcar/tiles-northeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southwest\nw/ Ranged from A',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northwest',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'idle',
                    description: 'SE South cubby',
                    imageUrl: './strats/codcar/tiles-southeast-idle.png',
                    mask: 'radial-gradient(circle at 49% 82%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'wild charge',
                    description: 'SE South cubby',
                    imageUrl: './strats/codcar/tiles-southeast-wc.png',
                    mask: 'radial-gradient(circle at 55% 68%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'swap',
                    description: 'SE central tile',
                    imageUrl: './strats/codcar/tiles-southeast-swap.png',
                    mask: 'radial-gradient(circle at 49% 50%, black 28%, rgba(0, 0, 0, 0.4) 28%)'
                },
            ],
            swapNote: "I got a clean swap to a platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southwest\nw/ Ranged from A',
                    imageUrl: './strats/codcar/postswap-platform-pairs.png',
                    mask: 'radial-gradient(circle at 38% 60%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Relative Northwest',
                    imageUrl: './strats/codcar/postswap-platform-spread.png',
                    mask: 'radial-gradient(circle at 26% 25%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'Relative North/CW',
                    imageUrl: './strats/codcar/postswap-platform-towers.png',
                    mask: 'radial-gradient(circle at 65% 39%, black 30%, rgba(0, 0, 0, 0.4) 30%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Inner\nRelative Southeast\nw/ Ranged from C',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 61% 60%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative South',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 50% 83%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 72% 65%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 73% 85%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 85% 27%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Inside Middle',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 48%, black 18%, rgba(0, 0, 0, 0.4) 18%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: 'Right/East platform, Boss faces Outside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Outer\nRelative Southeast\nw/ Ranged from C',
                    imageUrl: './strats/codcar/platform-pairs.png',
                    mask: 'radial-gradient(circle at 71% 74%, black 10%, rgba(0, 0, 0, 0.4) 10%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'spread',
                    description: 'Relative East',
                    imageUrl: './strats/codcar/platform-spread.png',
                    mask: 'radial-gradient(circle at 82% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'towers',
                    description: 'Relative South/CW',
                    imageUrl: './strats/codcar/platform-towers.png',
                    mask: 'radial-gradient(circle at 36% 66%, black 29%, rgba(0, 0, 0, 0.2) 29%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': 'rotate(90deg)',
                        'addrelative': '',
                    }
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-brambles.png',
                    mask: 'radial-gradient(circle at 75% 37%, black 12%, rgba(0, 0, 0, 0.4) 12%)',
                    transform: 'rotate(180deg)',
                    alignmentTransforms: {
                        'original': 'rotate(180deg)',
                        'truenorth': 'rotate(180deg)',
                        'addrelative': 'rotate(90deg)',
                    }
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside\nRelative Left\nTrue North',
                    imageUrl: './strats/codcar/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 72% 13%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    alignmentImages: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': './strats/codcar/platform-east-aoe-spread-rotated.png',
                    },
                    alignmentMasks: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'radial-gradient(circle at 13% 27%, black 8%, rgba(0, 0, 0, 0.4) 8%)',
                    },
                },
                {
                    mechanic: 'swap',
                    description: 'Inside\nRelative Right\nTrue South',
                    imageUrl: './strats/codcar/platform-east-swap.png',
                    mask: 'radial-gradient(circle at 30% 73%, black 16%, rgba(0, 0, 0, 0.4) 16%)',
                    alignmentTransforms: {
                        'original': '',
                        'truenorth': '',
                        'addrelative': 'rotate(270deg)',
                    }
                },
            ]
        },
    ]
}

const healerOutStrat: Strat = {
    stratName: 'healerout',
    stratUrl: 'https://docs.google.com/presentation/d/1TRqF03mJQNoYTibS0X1tURwyZTjghTUWnoF8c_r_tEA',
    description: "Taken from HealerOutCAR by Jake Hale",
    notes: '',
    strats: [
        {
            alliance: 'A',
            role: 'Tank',
            party: 1,
            notes: 'Left/West platform, Face boss Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nInside\nw/ Healer from B',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 71.0% 49.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 85.8% 50.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside North',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 76% 37%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Tank',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SW inner tile',
                    imageUrl: './strats/healerout/tiles-southwest.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 1!\nMove first on mechanics!",
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nInside\nw/ Healer from B',
                    imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 30.7% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Inside',
                    imageUrl: './strats/healerout/postswap-a-platform-east-spread.png',
                    mask: 'radial-gradient(circle at 11.5% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 1,
            notes: 'Left/West platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Far from boss\nNorth Outside\nw/ Ranged',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 24.0% 22.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 20.1% 50.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/Inside',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 55.6% 35.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside South',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 37.1% 63.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Healer',
            party: 2,
            notes: 'Left/West platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Far from boss\nSouth Outside\nw/ Melee',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 24.2% 79.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 55.7% 79.7%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/Inside',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 16.8% 34.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside South',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 29.4% 87.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 1,
            notes: 'Left/West platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nSouth Outside\nw/ Healer 2',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 35.3% 68.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South Outside',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 21.7% 76.2%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 40% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside South',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 77.3% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Melee',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SW South cubby',
                    imageUrl: './strats/healerout/tiles-southwest.png',
                    mask: 'radial-gradient(circle at 49.7% 76.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nSouth Outside\nw/ Healer 2',
                    imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 67.5% 64.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South Outside',
                    imageUrl: './strats/healerout/postswap-a-platform-east-spread.png',
                    mask: 'radial-gradient(circle at 76.3% 74.0%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 1,
            notes: 'Left/West platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nNorth Outside\nw/ Healer 1',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 35.7% 35.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North Outside',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 20.8% 24.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 54.9% 62.9%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside North',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 34.8% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'A',
            role: 'Ranged',
            party: 2,
            notes: 'SW/Back Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SW West cubby',
                    imageUrl: './strats/healerout/tiles-southwest.png',
                    mask: 'radial-gradient(circle at 19.7% 48.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nNorth Outside\nw/ Healer 1',
                    imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 70.5% 29.9%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North Outside',
                    imageUrl: './strats/healerout/postswap-a-platform-east-spread.png',
                    mask: 'radial-gradient(circle at 71.2% 24.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'NW inner tile',
                    imageUrl: './strats/healerout/tiles-northwest.png',
                    mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 1!\nMove first on mechanics!",
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nInside\nw/ Healer from B',
                    imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 30.7% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Inside',
                    imageUrl: './strats/healerout/postswap-b-platform-east-spread.png',
                    mask: 'radial-gradient(circle at 11.5% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Tank',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'NE inner tile',
                    imageUrl: './strats/healerout/tiles-northeast.png',
                    mask: 'radial-gradient(circle at 24.9% 51.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 1!\nMove first on mechanics!",
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nInside\nw/ Healer from B',
                    imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 71.9% 48%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Inside',
                    imageUrl: './strats/healerout/postswap-b-platform-west-spread.png',
                    mask: 'radial-gradient(circle at 87.9% 50.8%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 1,
            notes: 'Left/West platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Far from boss\nInside\nw/ Tank',
                    imageUrl: './strats/healerout/platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 87.4% 49.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/healerout/platform-west-spread.png',
                    mask: 'radial-gradient(circle at 56.6% 12.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/Inside',
                    imageUrl: './strats/healerout/platform-west-towers.png',
                    mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South',
                    imageUrl: './strats/healerout/platform-west-brambles.png',
                    mask: 'radial-gradient(circle at 17.1% 55%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside North',
                    imageUrl: './strats/healerout/platform-west-aoe-spread.png',
                    mask: 'radial-gradient(circle at 32.2% 15.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-west-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Healer',
            party: 2,
            notes: 'Right/East platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Far from boss\nInside\nw/ Tank',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 12.6% 50%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 39% 17%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/Inside',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside South',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 88% 58.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside North',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 70% 18.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'NW North cubby',
                    imageUrl: './strats/healerout/tiles-northwest.png',
                    mask: 'radial-gradient(circle at 49.1% 19.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nSouth Outside\nw/ Healer 2 from A',
                    imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 69.2% 65.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-east-spread.png',
                    mask: 'radial-gradient(circle at 76.4% 74.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 50% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 69% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Melee',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'NE North cubby',
                    imageUrl: './strats/healerout/tiles-northeast.png',
                    mask: 'radial-gradient(circle at 52% 20%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nSouth Outside\nw/ Healer 2 from C',
                    imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 34.9% 66.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-west-spread.png',
                    mask: 'radial-gradient(circle at 23.4% 76.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 1,
            notes: 'NW/Front Left tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'NW West cubby',
                    imageUrl: './strats/healerout/tiles-northwest.png',
                    mask: 'radial-gradient(circle at 19.8% 48.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
                },
            ],
            swapNote: "I got a clean swap to the East platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nNorth Outside\nw/ Healer 1 from A',
                    imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 71.9% 30.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-east-spread.png',
                    mask: 'radial-gradient(circle at 71.7% 26.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
                    mask: 'radial-gradient(circle at 50% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 69% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'B',
            role: 'Ranged',
            party: 2,
            notes: 'NE/Front Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'NE East cubby',
                    imageUrl: './strats/healerout/tiles-northeast.png',
                    mask: 'radial-gradient(circle at 81.5% 49.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nNorth Outside\nw/ Healer 1 from C',
                    imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 36.1% 34.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-west-spread.png',
                    mask: 'radial-gradient(circle at 22.4% 25.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 1,
            notes: 'Right/East platform, Face boss Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nInside\nw/ Healer from B',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 31% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 11.2% 50.3%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62.7% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside North',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Tank',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SE inner tile',
                    imageUrl: './strats/healerout/tiles-southeast.png',
                    mask: 'radial-gradient(circle at 21% 48%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 1!\nMove first on mechanics!",
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nInside\nw/ Healer from B',
                    imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 72% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Inside',
                    imageUrl: './strats/healerout/postswap-c-platform-west-spread.png',
                    mask: 'radial-gradient(circle at 89% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31.5% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 1,
            notes: 'Right/East platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Far from boss\nNorth Outside\nw/ Ranged',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 87.1% 19.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 75.5% 48.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/Inside',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside North',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 47.7% 40.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside South',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 61.9% 62.3%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Healer',
            party: 2,
            notes: 'Right/East platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Far from boss\nSouth Outside\nw/ Melee',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 82% 75.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 40% 83.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'South/Inside',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Outside North',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 89.5% 41.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Ring Outside South',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 67.9% 86.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Inside',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 1,
            notes: 'Right/East platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nSouth Outside\nw/ Healer 2',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 69.1% 64.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South Outside',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 75.6% 73.9%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'None, stay on boss',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 62.7% 51%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Inside South',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Melee',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SE South cubby',
                    imageUrl: './strats/healerout/tiles-southeast.png',
                    mask: 'radial-gradient(circle at 49.6% 80.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nSouth Outside\nw/ Healer 2',
                    imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 36% 68%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'South Outside',
                    imageUrl: './strats/healerout/postswap-c-platform-west-spread.png',
                    mask: 'radial-gradient(circle at 23.4% 76.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50.4% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 1,
            notes: 'Right/East platform, Boss faces Inside',
            startingArea: 'Platform',
            strats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nNorth Outside\nw/ Healer 1',
                    imageUrl: './strats/healerout/platform-east-pairs.png',
                    mask: 'radial-gradient(circle at 72.1% 30.4%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North Outside',
                    imageUrl: './strats/healerout/platform-east-spread.png',
                    mask: 'radial-gradient(circle at 71.2% 26.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/platform-east-towers.png',
                    mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
                },
                {
                    mechanic: 'bramble',
                    description: 'Inside South',
                    imageUrl: './strats/healerout/platform-east-brambles.png',
                    mask: 'radial-gradient(circle at 46.5% 68.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
                },
                {
                    mechanic: 'aoes',
                    description: 'Platform Outside North',
                    imageUrl: './strats/healerout/platform-east-aoe-spread.png',
                    mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
                },
                {
                    mechanic: 'swap',
                    description: 'Outside',
                    imageUrl: './strats/healerout/platform-east-swap.png',
                    mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
                },
            ]
        },
        {
            alliance: 'C',
            role: 'Ranged',
            party: 2,
            notes: 'SE/Back Right tiles',
            startingArea: 'Tiles',
            strats: [
                {
                    mechanic: 'start',
                    description: 'SE East cubby',
                    imageUrl: './strats/healerout/tiles-southeast.png',
                    mask: 'radial-gradient(circle at 79.2% 49.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
                },
                {
                    mechanic: 'priority: t>m>r',
                    description: "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
                },
            ],
            swapNote: "I got a clean swap to the West platform! Now what?",
            swapStrats: [
                {
                    mechanic: 'pairs',
                    description: 'Close to boss\nNorth Outside\nw/ Healer 1',
                    imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
                    mask: 'radial-gradient(circle at 36.1% 34.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'spread',
                    description: 'North Outside',
                    imageUrl: './strats/healerout/postswap-c-platform-west-spread.png',
                    mask: 'radial-gradient(circle at 22.4% 25.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
                },
                {
                    mechanic: 'towers',
                    description: 'North/Outside',
                    imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
                    mask: 'radial-gradient(circle at 50.4% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
                },
            ],
        },
    ]
}