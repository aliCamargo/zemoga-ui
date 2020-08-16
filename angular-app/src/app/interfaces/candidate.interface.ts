export interface ICandidate {
  id: number;
  name: string;
  time_ago: string;
  description: string;
  profile_picture: string;
  industry: string;
  votes: {
    up: number;
    down: number;
  };
}
