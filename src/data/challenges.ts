import { SkillNode } from '../types';

export const skillTree: SkillNode[] = [
  {
    id: 'node-1',
    title: 'Iterative Constructs and State Space',
    description: 'Arrays, Loops, and Basic Transformations. Foundational concepts of memory allocation and state mutation.',
    position: { x: 400, y: 50 },
    challenges: [
      {
        id: 'sorting-loom',
        level: 1,
        difficulty: 'Easy',
        title: 'The Sorting Loom',
        description: 'Traverse a single-dimensional array to apply a uniform mathematical operation or state change. This artwork visualizes an Insertion Sort algorithm as a digital weaving process. Each element is a vertical thread of varying color. As the algorithm traverses, threads are displaced, leaving a permanent visual trail of previous states.',
        artworkDescription: 'A woven tapestry that begins chaotic at the top and transitions into a perfectly ordered color gradient at the bottom.',
        starterCode: `function setup() {
  createCanvas(400, 400);
  background(20);
  // Initialize your array here
}

function draw() {
  // Implement linear iteration and weaving logic
}`
      },
      {
        id: '10print',
        level: 2,
        difficulty: 'Medium',
        title: '10PRINT Labyrinth',
        description: 'Utilize nested loops to construct a 2D grid, applying conditional logic to alter indices based on coordinate relationships. Homage to Commodore 64 aesthetics, where probability thresholds are mapped to a Perlin noise field.',
        artworkDescription: 'A dynamic labyrinth where localized zones of order meet chaotic intersections.',
        starterCode: `function setup() {
  createCanvas(400, 400);
  background(20);
}

function draw() {
  // Implement nested loops and 10PRINT logic
}`
      },
      {
        id: 'data-decay',
        level: 3,
        difficulty: 'Hard',
        title: 'Concentric Data Decay',
        description: 'Implement an in-place mutation algorithm. Read an array of randomly generated integers and map them to concentric circles. An iterative function slowly decays the values over time, causing rings to fracture into dashed arcs.',
        artworkDescription: 'A living data visualization representing memory allocation and variable decay as fading geometry.',
        starterCode: `let values = [];

function setup() {
  createCanvas(400, 400);
  for(let i=0; i<50; i++) values.push(random(100));
}

function draw() {
  background(20, 20, 20, 10);
  // Implement decay logic and concentric rendering
}`
      }
    ]
  },
  {
    id: 'node-2',
    title: 'Contiguous Sequence Optimization',
    description: 'Two Pointers and Sliding Window Techniques. Analyzing contiguous subarrays without redundant recalculations.',
    position: { x: 400, y: 200 },
    challenges: [
      {
        id: 'breathing-aperture',
        level: 1,
        difficulty: 'Easy',
        title: 'The Breathing Aperture',
        description: 'Maintain a fixed-size sliding window to calculate properties of consecutive elements. The aperture moves left to right, highlighting active subsegments while leaving others obscured.',
        artworkDescription: 'A dynamic framing device that mimics a mechanical breathing apparatus.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement fixed-size sliding window
}`
      },
      {
        id: 'harmonic-convergence',
        level: 2,
        difficulty: 'Medium',
        title: 'Harmonic Convergence Mandala',
        description: 'Implement a dynamic-size sliding window using two pointers. Find the longest or shortest contiguous sequence meeting a specific constraint.',
        artworkDescription: 'A perfect geometric mandala formed by converging search space reduction.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement dynamic sliding window / two pointers
}`
      },
      {
        id: 'glitch-window',
        level: 3,
        difficulty: 'Hard',
        title: 'Glitch-Window Sorting',
        description: 'Utilize multiple pointers moving inward from extremes of a sorted dataset. Identify optimal harmonic pairings.',
        artworkDescription: 'A corrupted image array where a sliding window leaves a trail of sorted color gradients.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement extreme pointers logic
}`
      }
    ]
  },
  {
    id: 'node-3',
    title: 'Deterministic Mapping and Lookups',
    description: 'Hash Maps, Sets, and Seeded Generation. Achieving O(1) lookup times and reproducible aesthetics.',
    position: { x: 650, y: 300 },
    challenges: [
      {
        id: 'cryptographic-hex',
        level: 1,
        difficulty: 'Easy',
        title: 'The Cryptographic Hex-Grid',
        description: 'Create a frequency map to count occurrences. Map subsets of a cryptographic string to dictate rendering parameters.',
        artworkDescription: 'A complex hexagonal grid where features are deterministically bound to hash values.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement hash-to-grid mapping
}`
      },
      {
        id: 'two-sum-constellation',
        level: 2,
        difficulty: 'Medium',
        title: 'The Two-Sum Constellation',
        description: 'Utilize a hash map to detect complementary pairs (Two Sum algorithm) instantly.',
        artworkDescription: 'A dark canvas of floating bodies that form constellations when a valid pair is found.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement O(n) Two Sum with hash map
}`
      },
      {
        id: 'collision-splatter',
        level: 3,
        difficulty: 'Hard',
        title: 'Collision Splatter and Bucketing',
        description: 'Handle hash collisions visually. Data points fall into buckets; collisions cause ink to splatter and mix colors.',
        artworkDescription: 'Organic, chaotic stains representing hash table collisions.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement hash collision visualization
}`
      }
    ]
  },
  {
    id: 'node-4',
    title: 'Dynamic Relational Topologies',
    description: 'Linked Lists, Queues, and Stacks. Pointer reassignment and sequential data flow restrictions.',
    position: { x: 150, y: 300 },
    challenges: [
      {
        id: 'lifo-fifo-sediment',
        level: 1,
        difficulty: 'Easy',
        title: 'LIFO/FIFO Sedimentation',
        description: 'Implement basic Stack and Queue logic to manage digital objects. Visualize them as geological processes.',
        artworkDescription: 'Side-by-side comparison of LIFO and FIFO as mountain building and erosion.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement stack and queue visualization
}`
      },
      {
        id: 'ouroboros-reversal',
        level: 2,
        difficulty: 'Medium',
        title: 'The Ouroboros Pointer Reversal',
        description: 'Reverse a singly linked list iteratively by manipulating next pointers in place.',
        artworkDescription: 'A snake-like entity that flips its direction through pointer mutation.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement linked list reversal animation
}`
      },
      {
        id: 'floyds-orbital',
        level: 3,
        difficulty: 'Hard',
        title: 'Floyd\'s Orbital Cycle',
        description: 'Detect a cycle in a linked list using fast and slow pointers (Floyd\'s Cycle-Finding algorithm).',
        artworkDescription: 'An orbital map where a fast pointer "lapping" a slow one triggers a burst of light.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement cycle detection visualization
}`
      }
    ]
  },
  {
    id: 'node-5',
    title: 'Kinematics and Simulation Physics',
    description: 'Vectors, Forces, and Autonomous Agents. Simulating motion via mathematical integration.',
    position: { x: 400, y: 450 },
    challenges: [
      {
        id: 'levy-flight',
        level: 1,
        difficulty: 'Easy',
        title: 'Lévy Flight Particle Cloud',
        description: 'Implement a physics mover with vectors. Use non-uniform probability distributions for movement.',
        artworkDescription: 'Striking, cloud-like fractal geometries traced by alpha-faded paths.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Lévy Flight vectors
}`
      },
      {
        id: 'fluid-drag',
        level: 2,
        difficulty: 'Medium',
        title: 'Fluid Drag Lava Lamp',
        description: 'Introduce environmental friction and fluid drag calculations (proportional to velocity squared).',
        artworkDescription: 'Mesmerizing digital lava lamp responding to variable friction.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement drag force F = -1/2 * rho * v^2 * ACd
}`
      },
      {
        id: 'boids-flocking',
        level: 3,
        difficulty: 'Hard',
        title: 'Boids Flocking Assembly',
        description: 'Implement steering behaviors: separation, alignment, and cohesion. Observe emergent group behavior.',
        artworkDescription: 'Swirling patterns mimicking starlings in flight, forming temporary shapes.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Boids algorithm
}`
      }
    ]
  },
  {
    id: 'node-6',
    title: 'Hierarchical Data Traversal',
    description: 'Binary Trees, DFS, and BFS. Recursive branching and strategic exploration of non-linear structures.',
    position: { x: 400, y: 600 },
    challenges: [
      {
        id: 'l-system-fractal',
        level: 1,
        difficulty: 'Easy',
        title: 'The L-System Fractal Canopy',
        description: 'Implement recursive functions to draw a binary tree or L-system using matrix transformations.',
        artworkDescription: 'Algorithmic botany where recursive depth limits dictate complexity.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement recursive tree/L-system
}`
      },
      {
        id: 'dfs-root-veins',
        level: 2,
        difficulty: 'Medium',
        title: 'DFS Root Veins',
        description: 'Utilize Depth-First Search to explore paths, mapping traversal depth to color shifts.',
        artworkDescription: 'Simulates aggressive growth of subterranean roots or lightning strikes.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement DFS visualization
}`
      },
      {
        id: 'bfs-ripples',
        level: 3,
        difficulty: 'Hard',
        title: 'BFS Hexagonal Ripples',
        description: 'Implement Breadth-First Search on a grid to simulate radial expansion and shortest-path solving.',
        artworkDescription: 'Concentric, rippling wavefronts of color expanding through a hexagonal grid.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement BFS visualization
}`
      }
    ]
  },
  {
    id: 'node-7',
    title: 'Optimal Substructure',
    description: 'Dynamic Programming and Memoization. Breaking down complex problems into overlapping subproblems.',
    position: { x: 150, y: 600 },
    challenges: [
      {
        id: 'memoized-nautilus',
        level: 1,
        difficulty: 'Easy',
        title: 'The Memoized Nautilus',
        description: 'Implement a memoized sequence generator (Fibonacci) to optimize recursive calculations.',
        artworkDescription: 'A golden ratio nautilus shell that renders smoothly only when memoization is active.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Fibonacci with and without memoization
}`
      },
      {
        id: 'kadanes-horizon',
        level: 2,
        difficulty: 'Medium',
        title: 'Kadane’s Geometric Horizon',
        description: 'Solve the maximum subarray sum problem using Kadane\'s algorithm.',
        artworkDescription: 'A mountain range where a neon trace highlights the absolute highest continuous subsegment.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Kadane's algorithm visualization
}`
      },
      {
        id: 'algorithmic-mondrian',
        level: 3,
        difficulty: 'Hard',
        title: 'Algorithmic Mondrian',
        description: 'Solve the 2D Knapsack problem to optimally pack rectangles into a canvas area.',
        artworkDescription: 'An optimally packed geometric masterpiece in the style of Mondrian.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement 2D Dynamic Programming (Knapsack)
}`
      }
    ]
  },
  {
    id: 'node-8',
    title: 'Complex Emergence and Adaptation',
    description: 'Cellular Automata and Evolutionary Algorithms. Simulating biological life and systemic adaptation.',
    position: { x: 650, y: 600 },
    challenges: [
      {
        id: 'hex-reef',
        level: 1,
        difficulty: 'Easy',
        title: 'Hexagonal Reef Expansion',
        description: 'Implement a 2D Cellular Automaton (Conway\'s Game of Life) on a hexagonal grid.',
        artworkDescription: 'Organic coral structures emerging from localized neighborhood rules.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Cellular Automata on Hex Grid
}`
      },
      {
        id: 'darwinian-rocketry',
        level: 2,
        difficulty: 'Medium',
        title: 'Darwinian Rocketry',
        description: 'Create a Genetic Algorithm to evolve steering vectors to match a target destination.',
        artworkDescription: 'Rockets evolving synchronized flight paths to navigate obstacles.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Genetic Algorithm
}`
      },
      {
        id: 'flappy-ecosystem',
        level: 3,
        difficulty: 'Hard',
        title: 'The Flappy Bird Ecosystem',
        description: 'Develop a Neuroevolutionary ecosystem where agents navigate via artificial neural networks.',
        artworkDescription: 'Autonomous creatures learning to navigate an infinite environment.',
        starterCode: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Implement Neuroevolution
}`
      }
    ]
  }
];
