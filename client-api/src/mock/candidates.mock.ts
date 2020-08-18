import { ICandidate } from 'src/core/interfaces/candidates.interface';

export const CANDIDATES: ICandidate[] = [
  {
    id: 1,
    name: 'Kanye West',
    time_ago: '1 month',
    industry: 'Entertaiment',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    profile_picture: 'kanye-west.jpg',
    votes: {
      up: 64,
      down: 36
    }
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    time_ago: '1 month',
    industry: 'Business',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    profile_picture: 'mark-zuckerberg.jpg',
    votes: {
      up: 36,
      down: 64
    }
  },
  {
    id: 3,
    name: 'Cristina Fernández de Kirchner',
    time_ago: '1 month',
    industry: 'Politics',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    profile_picture: 'cristina-fernandez-de-kirchner.jpg',
    votes: {
      up: 36,
      down: 64
    }
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    time_ago: '1 month',
    industry: 'Entertaiment',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    profile_picture: 'malala-yousafzai.jpg',
    votes: {
      up: 64,
      down: 36
    }
  }
];
