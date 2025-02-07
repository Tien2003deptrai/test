export type Person = {
  name: string;
  age: number;
  email: string;
  address: string;
};

export type PersonWithId = Person & {
  id: string;
};

export type PersonWithIdAndRole = PersonWithId & {
  role: string;
};

export type PersonWithIdAndRoleAndSkills = PersonWithIdAndRole & {
  skills: string[];
}