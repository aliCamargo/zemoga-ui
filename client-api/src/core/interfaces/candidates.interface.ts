export interface ICandidate {
  id: number;
  name: string;
  time_ago: string;
  industry: string;
  description: string;
  profile_picture: string;
  votes: {
    up: number;
    down: number;
  };
}
