export type Folder = {
  key: string;
  title: string;
  children: Folder[] | null;
};

const folders: Folder[] = [
  {
    key: 'firstTitle',
    title: 'firstTitle',
    children: [
      {
        key: 'firstSub',
        title: 'firstSub',
        children: null,
      },
      {
        key: 'secondSub',
        title: 'secondSub',
        children: null,
      },
      {
        key: 'thirdSub',
        title: 'thirdSub',
        children: null,
      },
    ],
  },
  {
    key: 'secondTitle',
    title: 'secondTitle',
    children: [
      {
        key: 'firstSub',
        title: 'firstSub',
        children: null,
      },
      {
        key: 'secondSub',
        title: 'secondSub',
        children: null,
      },
      {
        key: 'thirdSub',
        title: 'thirdSub',
        children: null,
      },
      {
        key: 'fourthSub',
        title: 'fourthSub',
        children: null,
      },
    ],
  },
  {
    key: 'thirdTitle',
    title: 'thirdTitle',
    children: [
      {
        key: 'firstSub',
        title: 'firstSub',
        children: null,
      },
      {
        key: 'secondSub',
        title: 'secondSub',
        children: null,
      },
      {
        key: 'thirdSub',
        title: 'thirdSub',
        children: null,
      },
      {
        key: 'fourthSub',
        title: 'fourthSub',
        children: null,
      },
    ],
  },
];

export default folders;
