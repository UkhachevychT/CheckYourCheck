import { Check } from './check';

export class User {
    id: number;
    username: string;
    email: string; //Unique
    checks: Array<Check>;
}
