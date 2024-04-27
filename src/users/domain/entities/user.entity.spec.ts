import { faker } from '@faker-js/faker';
import { UserBuilder, UserEntity } from './user.entity';

describe('User Entity', () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  let sut: UserBuilder;
  beforeEach(() => {
    sut = new UserBuilder();
  });
  it('Builder User', () => {
    const userEntity = sut
      .name(user.name)
      .email(user.email)
      .password(user.password)
      .build();

    expect(userEntity).toBeInstanceOf(UserEntity);
    expect(userEntity.name).toBe(user.name);
    expect(userEntity.email).toBe(user.email);
    expect(userEntity.password).toBe(user.password);
  });

  it('Should return undefined if only the name parameter is not set ', () => {
    const userEntity = sut.name(user.name).build();

    expect(userEntity.name).toBe(user.name);
    expect(userEntity.email).toBeUndefined();
    expect(userEntity.password).toBeUndefined();
  });

  it('Should return undefined if only the email parameter is not set ', () => {
    const userEntity = sut.email(user.email).build();

    expect(userEntity.name).toBeUndefined();
    expect(userEntity.email).toBe(user.email);
    expect(userEntity.password).toBeUndefined();
  });

  it('Should return undefined if only the password parameter is not set ', () => {
    const userEntity = sut.password(user.password).build();

    expect(userEntity.name).toBeUndefined();
    expect(userEntity.email).toBeUndefined();
    expect(userEntity.password).toBe(user.password);
  });
});
