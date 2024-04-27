export class UserEntity {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor() {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

export class UserBuilder {
  private user = new UserEntity();

  name(value: string): this {
    this.user.name = value;
    return this;
  }

  email(value: string): this {
    this.user.email = value;
    return this;
  }

  password(value: string): this {
    this.user.password = value;
    return this;
  }

  build(): UserEntity {
    return this.user;
  }
}
