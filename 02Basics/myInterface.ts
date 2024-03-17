interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
    gitHubToken : string
}

interface Admin extends User {
    role: "admin" | 'ta' | "learner"
}

const nitish: Admin = {
  dbId: 23,
  email: 'n@gmail.com',
  role:'admin',
  gitHubToken:"github",
  userId: 23,
  startTrial: () => {
    return 'trial started';
  },
  getCoupon: (name: 'nitish98', off: 10) => {
    return 10;
  },
};

nitish.email = 'n@gmial.com';


export {};