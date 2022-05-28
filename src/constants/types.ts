export const home = 'Home';
export const search = 'Search';
export const library = 'Library';

export interface CounterState {
  value: number;
}
export interface OnboardingState {
  firstTime: boolean;
}

export type MainBottomTabParams = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};
