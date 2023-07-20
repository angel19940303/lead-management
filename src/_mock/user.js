import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// ----------------------------------------------------------------------

// const users_ = [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.name.fullName(),
//   company: faker.company.name(),
//   isVerified: faker.datatype.boolean(),
//   status: sample(['Approved', 'Pending', 'Conditional Approval', 'Declined', 'Tubed', 'Signed', 'Carry Over']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer',
//   ]),
// }));

// useEffect(() => {
// console.log(faker.name.email());
// }, [])

const users = [...Array(24)].map(() => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.fullName().split(" ")[0],
  lastName: faker.name.fullName().split(" ")[1],
  email: sample(['bmars@gmail.com', 'bmars3609@gmail.com', 'bmars326@gmail.com', 'bmars333@gmail.com', 'bmars8218@gmail.com', 'bmars8218@gmail.com', 'bmars8218@gmail.com']),
  phone: sample(['232', '342', '534', '657', '234', '853']),
  job: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
  status: sample(['Approved', 'Pending', 'Conditional Approval', 'Declined', 'Tubed', 'Signed', 'Carry Over']),
}));

export default users;
