// basic js map()
const myLuckyNums = [1, 2, 3, 4, 5];
const myLuckyStrings = myLuckyNums.map((n) => n.toString());
console.log(myLuckyStrings);

type lisOfFriend = {
  friend1: string;
  friend2: string;
  friend3: string;
  friend4: number;
};

//* mapped-types
type lisOfFriendReadOnly = {
  readonly [key in keyof lisOfFriend]: lisOfFriend[key];

  /**
   * NOTE:
   *
   * key === 'friend1'
   * key === 'friend2'
   * key === 'friend3'
   * key === 'friend4'
   *
   * *HERE, "keyof listOfFriend" === 'friend1' | 'friend2' | 'friend3' | 'friend4'
   *  */
};

const friendList: lisOfFriend = {
  friend1: 'abc',
  friend2: 'def',
  friend3: 'ghi',
  friend4: 44,
};

// friendList.friend1 = 'Fahim';
console.log(friendList);
